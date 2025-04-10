import React from "react";
import { motion } from "framer-motion";
import { Button } from "../button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <motion.div
      className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 justify-center items-center pt-12 md:pt-16 lg:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="text-sm md:text-base bg-[#2E6D9C] border-[0.87px] px-4 py-1.5 rounded-full text-white"
      >
        Welcome to KeySystem
      </motion.h1>

      <motion.div
        className="flex flex-col gap-6 md:gap-8 lg:gap-10 z-10"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] leading-tight font-bold mt-6 text-center text-white"
        >
          IT Consulting for Forward-thinking Businesses
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-2xl lg:text-[32px] text-center text-white font-normal"
        >
          Driving Digital Transformation, One Solution at a Time
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button children="Get Started" size="large" variant="primary" />
          <Button children="Learn More" size="large" variant="secondary" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
