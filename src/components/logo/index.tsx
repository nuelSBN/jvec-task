import { images } from "@/constants";
import React from "react";

export function Logo() {
  return (
    <h1>
      <img src={images.logo} alt="Key System Logo" title="Key System Logo" />
    </h1>
  );
}
