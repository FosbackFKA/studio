
import type {Metadata} from 'next';
import './globals.css';
import '@/styles/theme.css'; // Import the new theme file
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'FK Prototype',
  description: 'Prototype of Felleskjøpet website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
        <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
        <style>{`
          df-messenger {
            z-index: 999;
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            --df-messenger-bot-message: hsl(var(--card));
            --df-messenger-button-titlebar-color: hsl(var(--primary));
            --df-messenger-button-titlebar-font-color: hsl(var(--primary-foreground));
            --df-messenger-chat-background: hsl(var(--background));
            --df-messenger-font-color: hsl(var(--foreground));
            --df-messenger-input-box-background: hsl(var(--card));
            --df-messenger-input-font-color: hsl(var(--foreground));
            --df-messenger-input-placeholder-font-color: hsl(var(--muted-foreground));
            --df-messenger-minimized-chat-close-icon-color: #fff;
            --df-messenger-send-icon: hsl(var(--primary));
            --df-messenger-titlebar-background: hsl(var(--primary));
            --df-messenger-titlebar-font-color: hsl(var(--primary-foreground));
            --df-messenger-user-message: hsl(var(--primary));
            --df-messenger-user-font-color: hsl(var(--primary-foreground));
          }
          df-messenger::part(chat-wrapper) {
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
          df-messenger::part(header) {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
          }
          df-messenger::part(launcher) {
            background-color: transparent !important;
            border: none !important;
          }
        `}</style>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
