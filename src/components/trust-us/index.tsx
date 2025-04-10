import React from "react";
import SectionTitle from "../sections-title";
import SectionSubtitle from "../section-subtitle";
import { companySlides } from "@/constants";

export function TrustUs() {
  return (
    <section className="py-8 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-4 items-center">
        <SectionTitle title="They Trust Us" />
        <SectionSubtitle text="And so can you" />
      </div>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {companySlides.map((item, index) => (
          <img
            src={item.image}
            alt={item.name}
            key={index}
            className="h-[75px] w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
