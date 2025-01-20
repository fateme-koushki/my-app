import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

import { IconBrandGithub, IconBrandReact } from '@tabler/icons-react';
import { IconBrandNextjs } from '@tabler/icons-react';
import { IconHtml } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandRedux } from '@tabler/icons-react';
import { IconBrandTypescript } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { useTranslations } from "next-intl";
export function Skills() {
    const text = useTranslations("public");
    const skills = text("skills")
    const t = useTranslations('skills');
    const github = t('github')
    const js = t('js')
    const ts = t('ts')
    const html = t('html')
    const react = t('react')
    const redux = t('redux')
    const next = t('next')
    const tailwind = t('tailwind')




  
  const links = [
    {
      title: `${github}`,
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: `${redux}`,
      icon: (
        <IconBrandRedux className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: `${next}`,
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: `${react}`,
      icon: (
        <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />

      ),
      href: "#",
    },
    {
      title: `${ts}`,
      icon: (
        <IconBrandTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: `${js}`,
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: `${tailwind}`,
      icon: (
        <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: `${html}`,
      icon: (
        <IconHtml className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full mb-2 w-full text-center mx-auto  ">
      <div className="text-neutral-950 dark:text-white font-bold mb-4 md:text-xl"> {skills}</div>
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
