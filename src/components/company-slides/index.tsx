import { companySlides } from "@/constants";
import { motion } from "framer-motion";

export function CompanySlides() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050617] py-6 px-4 sm:px-8">
      <motion.div
        className="flex gap-6 sm:gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicated slides for seamless loop */}
        {[...companySlides, ...companySlides].map((slide, index) => (
          <img
            src={slide.image}
            alt={slide.name}
            className="h-[50px] sm:h-[65px] md:h-[75px] w-auto flex-shrink-0 object-contain"
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
