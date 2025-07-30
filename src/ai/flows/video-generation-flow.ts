
'use server';
/**
 * @fileOverview A Genkit flow to generate video from a text prompt.
 *
 * - generateVideo - A function that handles the video generation process.
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import { z } from 'genkit';
import { MediaPart } from 'genkit/model';
import * as fs from 'fs';
import { Readable } from 'stream';


const VideoInputSchema = z.string().describe("The text prompt to generate a video from.");
export type VideoInput = z.infer<typeof VideoInputSchema>;

const VideoOutputSchema = z.object({
    videoUrl: z.string().optional().describe("A data URI of the generated video."),
    error: z.string().optional().describe("An error message if video generation failed."),
});
export type VideoOutput = z.infer<typeof VideoOutputSchema>;

async function toBase64(videoPart: MediaPart): Promise<string> {
    const fetch = (await import('node-fetch')).default;
    
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY environment variable not set.');
    }
    
    // Add API key before fetching the video.
    const videoDownloadResponse = await fetch(
        `${videoPart.media!.url}&key=${process.env.GEMINI_API_KEY}`
    );

    if (!videoDownloadResponse.ok || !videoDownloadResponse.body) {
        throw new Error(`Failed to download video: ${videoDownloadResponse.statusText}`);
    }

    const chunks: Buffer[] = [];
    for await (const chunk of videoDownloadResponse.body) {
        chunks.push(chunk as Buffer);
    }
    const buffer = Buffer.concat(chunks);
    return `data:video/mp4;base64,${buffer.toString('base64')}`;
}


const videoGenerationFlow = ai.defineFlow(
  {
    name: 'videoGenerationFlow',
    inputSchema: VideoInputSchema,
    outputSchema: VideoOutputSchema,
  },
  async (prompt) => {
    try {
        let { operation } = await ai.generate({
            model: googleAI.model('veo-2.0-generate-001'),
            prompt: prompt,
            config: {
            durationSeconds: 5,
            aspectRatio: '16:9',
            },
        });

        if (!operation) {
            throw new Error('Expected the model to return an operation');
        }

        // Poll for completion, waiting 5 seconds between checks.
        while (!operation.done) {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            operation = await ai.checkOperation(operation);
        }

        if (operation.error) {
            throw new Error(`Failed to generate video: ${operation.error.message}`);
        }

        const videoPart = operation.output?.message?.content.find((p) => !!p.media);
        if (!videoPart || !videoPart.media) {
            throw new Error('Failed to find the generated video in the operation result');
        }

        const videoDataUri = await toBase64(videoPart as MediaPart);

        return { videoUrl: videoDataUri };

    } catch (e: any) {
        console.error("Video generation error:", e);
        return { error: e.message || 'An unknown error occurred during video generation.' };
    }
  }
);


export async function generateVideo(prompt: VideoInput): Promise<VideoOutput> {
    return videoGenerationFlow(prompt);
}
