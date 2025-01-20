"use client";
import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";


export function BorderGradient({title}:{title :string}) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center w-32 justify-center  "
      >
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}


