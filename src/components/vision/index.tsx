import { visionMissionData } from "@/constants";
import React from "react";
import { VisionMissionCard } from "./vision-card";
import SectionTitle from "../sections-title";
import SectionSubtitle from "../section-subtitle";

export function Vision() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-12 px-4">
      <SectionTitle title="What we Represent" />
      <SectionSubtitle
        text={`Our relentless pursuit of excellence is the driving force
behind our success`}
      />
      <SectionSubtitle
        text="Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force behind our success. Excellence is our legacy, and we are proud to carry it forward. Watch the video to see how we are innovating to keep businesses on top of their games."
        color="text-[#D2D2D2]"
        clx="w-[90%] sm:w-[75%] text-center mx-auto"
      />
      <div className="w-full flex justify-center gap-8 flex-wrap mt-8">
        {visionMissionData.map((item, index) => (
          <VisionMissionCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
