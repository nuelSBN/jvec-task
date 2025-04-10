import React from "react";
import SectionTitle from "../sections-title";
import SectionSubtitle from "../section-subtitle";
import { images } from "@/constants";
import ServiceCard from "./service-card";

export function Service() {
  const cards = [
    {
      title: "Strategic Consultation",
      description:
        "We kick off with a strategic consultation to understand your brand, goals, and audience.",
      image: images.consultation,
    },
    {
      title: "Collaboration",
      description:
        "At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy.",
      image: images.collaboration,
    },
    {
      title: "Delivery",
      description:
        "Our delivery rate is 100%; our clients deserve nothing less.",
      image: images.delivery,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-4 items-center text-center max-w-4xl">
        <SectionTitle title="Our Process" />
        <SectionSubtitle text="At KeySystem, we leave you with a lasting impression" />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {cards.map((card, idx) => (
          <ServiceCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
