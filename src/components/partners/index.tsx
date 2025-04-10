import React from "react";
import SectionTitle from "../sections-title";
import SectionSubtitle from "../section-subtitle";
import { partnersSlides } from "@/constants";
import { motion } from "framer-motion";
import { Button } from "../button";
import { images } from "@/constants";

export function Partners() {
  return (
    <section className="py-8 flex flex-col gap-8 items-center px-4 sm:px-6 md:px-10">
      <div className="flex flex-col gap-4 md:gap-8 text-center max-w-4xl mx-auto">
        <SectionTitle title="Our Partners" />
        <SectionSubtitle
          text="Creating a Synergy with global brands"
          color="text-white"
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 bg-[#050617] p-[25px_10px] sm:p-[35px_10px]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...partnersSlides, ...partnersSlides].map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.name}
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center w-full relative">
        <div
          style={{
            background: "linear-gradient(to right, #4169E19E, #99999900)",
          }}
          className="p-[1px] w-full max-w-[95%] sm:max-w-[85%] md:max-w-[70%] rounded-[23px] z-10"
        >
          <div
            style={{
              background: "linear-gradient(to right, #030517, #181B4D)",
            }}
            className="w-full h-full flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 text-white rounded-[23px] relative"
          >
            <div className="flex flex-col gap-6 sm:gap-8 w-full md:w-[90%] lg:w-[70%] z-10">
              <div className="flex flex-col gap-2 sm:gap-4">
                <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[58px] font-bold leading-tight">
                  Ready to get started?
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#BBBBBB]">
                  Shoot us a Mail
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl">
                <p>
                  Join numerous corporations, organizations, and businesses as
                  they scale their teams, tap into new market opportunities and
                  build innovative products with KeySystem Technology.
                </p>
                <p>
                  Join thousands of students who are ready to learn new skills
                  or take their career to the next level by enrolling in one of
                  our training programs today.
                </p>
              </div>
              <div>
                <Button>Send Us a Mail Now</Button>
              </div>
            </div>
            <img
              src={images.partnerGradient}
              alt=""
              className="absolute top-0 right-0 z-0 max-w-[40%] hidden sm:block"
            />
          </div>
        </div>
        <img
          src={images.partnerRightGradient}
          alt=""
          className="absolute -top-[150px] sm:-top-[200px] left-0 z-0 max-w-[30%] hidden sm:block"
        />
      </div>
    </section>
  );
}
