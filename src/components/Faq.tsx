import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCom = ({ list }: any) => {
  return (
    <Accordion type="single" collapsible>
      {list.map((faq: any) => (
        <AccordionItem value={faq.question} key={faq.question}>
          <AccordionTrigger className="font-light sm:font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqCom;
