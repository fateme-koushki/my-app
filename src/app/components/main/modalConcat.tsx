"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../../components/ui/modal";
import { BorderGradient } from "./button";
import { useTranslations } from "next-intl";
import {  IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram } from "@tabler/icons-react";
import { IconBrandX } from '@tabler/icons-react';
import Link from "next/link";

export function AnimatedModalDemo() {
 const button = useTranslations('button');
 
 const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent);  
 const mailtoLink = `mailto:fatemekoushki3@gmail.com?subject=&body=send email to fateme}`;  

   
 const instagramLink = isMobile  
   ? `instagram://share/link?text=${encodeURIComponent(`fatemee_koushki`)}`  
   : 'https://www.instagram.com';  
  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalTrigger >
          <div >
             <BorderGradient title= {button('contact')} /> 
          </div>
        
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            
            
            <div className=" flex flex-col flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <div className="flex items-center justify-center">
                <IconBrandLinkedin className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                <Link target="_blank" rel="noopener noreferrer"  href={`https://www.linkedin.com/in/fateme-koushki`} className="text-neutral-700 dark:text-neutral-300 text-sm">
                    www.linkedin.com/in/fateme-koushki
                </Link>
              </div>
              <div className="flex  items-center justify-center">
                <IconBrandGithub className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                <Link target="_blank" rel="noopener noreferrer"  href={`https://github.com/FatemeKoushki`} className="text-neutral-700 dark:text-neutral-300 text-sm">
                        github.com/FatemeKoushki
                </Link>
              </div>
              
              <div className="flex items-center justify-center">
                <IconBrandTelegram className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                <Link href={`https://t.me/Fateme_koushki`} target="_blank" rel="noopener noreferrer" className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Fateme_koushki
                </Link>
              </div>
              <div className="flex  items-center justify-center">
                <IconBrandX className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5"  />
                <Link  target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("Fatemekoushki")}`} className="text-neutral-700 dark:text-neutral-300 text-sm">
                 Fatemekoushki
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <IconBrandInstagram className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                <Link href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-neutral-700 dark:text-neutral-300 text-sm">
                   fatemee_koushki
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <IconBrandGmail className="mx-2 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                <Link href={mailtoLink} target="_blank" rel="noopener noreferrer" className="text-neutral-700 dark:text-neutral-300 text-sm">
                 fatemekoushki3@gmail.com
                </Link>
              </div>
            </div>
          </ModalContent>
          <ModalFooter />
           
        </ModalBody>
      </Modal>
    </div>
  );
}


