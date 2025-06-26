
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "Hvor stor plen kan Navimow H3000E håndtere?",
    answer: "Denne modellen er designet for å håndtere plener på opptil 3000 kvadratmeter, noe som gjør den ideell for store hager."
  },
  {
    question: "Trenger jeg å legge ned kantledning?",
    answer: "Nei, Navimow bruker et satellittbasert system (EFLS) og VisionFence-kamera for å navigere. Du definerer klippeområdet virtuelt via appen, så du slipper helt unna graving og kantledning."
  },
  {
    question: "Hvordan fungerer den i områder med dårlig GPS-signal?",
    answer: "Det medfølgende VisionFence-kameraet bruker AI til å gjenkjenne kanter og hindringer. Hvis GPS-signalet blir svakt, for eksempel under store trær, tar VisionFence over for å sikre presis og kontinuerlig klipping."
  },
  {
    question: "Kan jeg styre klipperen fra telefonen?",
    answer: "Ja, alt styres via Navimow-appen. Der kan du sette opp klippeområder, no-go-soner, justere klippehøyden og sette opp tidsplaner for når du vil at plenen skal klippes."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="mt-12 border-t pt-12 lg:mt-16 lg:pt-16">
      <div className="container mx-auto max-w-[1542px] px-4">
        <h2 className="font-headline text-2xl font-bold lg:text-3xl mb-6">Ofte stilte spørsmål</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
