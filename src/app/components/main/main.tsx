"use client";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";

import { useTranslations } from "next-intl";
import { BorderGradient } from "./button";
import { AnimatedModalDemo } from "./modalConcat";
import Link from "next/link";

export function TypewriterEffectSmoothDemo() {
  const t = useTranslations('words');
  const button = useTranslations('button');
  

  const hello = t("hello")
  const im = t("im")
  const fateme = t("fateme")
  const koushki = t("koushki")
  const front = t("front")
  

  const words = [
    hello , im ,fateme , koushki 
  ]
  const words2 = [front]
  return (
    <div className="flex flex-col items-center  justify-center h-full mt-44 text-center mx-auto  ">
    
     <div className="h-[20rem] flex flex-col items-center mt-6 ">
     <TypewriterEffectSmooth words={words} words2={words2} />

       
      <div className="relative z-50 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:gap-4 mt-6">
        <Link href="#projects"> <BorderGradient title={button('projects')} /> </Link>
         
        <AnimatedModalDemo />

       

      </div>
      </div>
    </div>
  );
}
