"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Air Freight</AccordionTrigger>
        <AccordionContent>
          Our Air Freight service provides fast, secure global delivery.
          Leveraging a network of top airlines, we handle all cargo sizes,
          catering to both urgent and regular needs. We tailor solutions to fit
          your requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Road Freight</AccordionTrigger>
        <AccordionContent>
          Our Road Freight service guarantees safe, efficient transport of your
          goods across the country. Utilizing a fleet of modern vehicles, we
          handle all types of cargo. We offer flexible scheduling, real-time
          tracking, and competitive pricing to meet your unique needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>International Shipment</AccordionTrigger>
        <AccordionContent>
          Navigating customs and regulations, our International Shipment service
          delivers your goods globally with speed and security. We offer
          real-time tracking and cost-effective solutions, ensuring a reliable,
          hassle-free shipping experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Transportation</AccordionTrigger>
        <AccordionContent>
          We provide comprehensive Transportation services, ensuring your goods
          move seamlessly from origin to destination. Whether by road, air, or
          sea, our modern fleet and experienced team guarantee timely, safe
          delivery. Trust us for efficient, reliable logistics solutions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Ocean Freight</AccordionTrigger>
        <AccordionContent>
          Our Ocean Freight service offers cost-effective, eco-friendly
          solutions for shipping your goods across the globe. Leveraging
          partnerships with major carriers, we ensure secure, reliable sea
          transport.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Shippping And Logistics</AccordionTrigger>
        <AccordionContent>
          Navigating global transportation, our Shipping and Logistics services
          manage every step for efficient, secure delivery. We offer
          cost-effective, timely solutions, handling everything from planning to
          execution. Your end-to-end logistics needs are covered.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
