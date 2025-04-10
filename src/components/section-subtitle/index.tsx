import React from "react";

interface Props {
  text: string;
  clx?: string;
  color?: string;
}

export default function SectionSubtitle({ text, clx, color }: Props) {
  console.log(text.split("\n"));

  return (
    <p
      className={`text-lg lg:text-2xl font-normal text-center ${clx} ${
        color ? color : "text-[#BBBBBB]"
      }`}
    >
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index !== text.split("\n").length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}
