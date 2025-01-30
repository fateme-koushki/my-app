"use client";
import React from "react";
import { PinContainer } from "../../../components/ui/3d-pin";
import webShop from "../../../public/assets/project.png"
import doctorWeb from "../../../public/assets/doctor.png"

import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Projects() {
  const text = useTranslations("public") ;
  const appointment = text("appointment")
  const shop = text("shop")
  // const template = text("template")
  return (
    <div id="projects" className=" w-full   flex gap-28 md:gap-0 flex-col md:flex-row items-center justify-center h-full text-center">
     
      <PinContainer
        title="https://shopping-hazel-eight.vercel.app/"
        href="https://shopping-hazel-eight.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black/95 dark:text-slate-100">
            {shop}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                  Next.js
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image  src={webShop} alt="project"  className="object-contain w-full border dark:border-none "  />

          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="https://doctor-appointment-taupe.vercel.app"
        href="https://doctor-appointment-taupe.vercel.app"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  text-black/95 dark:text-slate-100">
             {appointment}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Next.js
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4  " >
          <Image  src={doctorWeb} alt="project"  className="object-contain w-full  border dark:border-none" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
