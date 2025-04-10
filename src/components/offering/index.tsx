import { icons, offeringPebbles } from "@/constants";
import React from "react";
import { Button } from "../button";
import SectionTitle from "../sections-title";
import SectionSubtitle from "../section-subtitle";

export function Offerings() {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-12 px-4 bg-[#0a0a23]">
      <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-6 text-white text-center">
        <SectionTitle title="Our Offerings" />
        <SectionSubtitle
          text={`Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity solutions drive efficiency, security, and growth. We empower businesses to thrive in the digital age`}
          clx="leading-relaxed tracking-wide"
          color="text-white"
        />
        <Button children="Learn more" size="small" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {offeringPebbles.map((item, idx) => (
          <button
            key={idx}
            className="text-white rounded-full text-center shadow-lg transition-all duration-300 hover:scale-105 border h-[135px] w-full flex flex-col justify-center items-center gap-2 px-4 text-[22px] sm:text-[24px] lg:text-[26px]"
            style={{
              background: item.bgStyle,
              borderColor: "linear-gradient(to right, #DCAEC200, #DCAEC2)",
            }}
          >
            <span className="whitespace-break-spaces text-center">
              {item.name}
            </span>
            <img
              src={icons.cursor}
              alt={item.name}
              className="h-[25px] w-[25px] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
