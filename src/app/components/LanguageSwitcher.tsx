'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import en from "../../public/flag/usa.jpg" ;
import ir from "../../public/flag/ir.png" ;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); 

  const changeLocale = (locale: string) => {
    router.push(`/${locale}${pathname.replace(/^\/[^/]+/, '')}`);
  };

  return (
    <div className='flex gap-1'>
      <button className='w-[33px] h-7  md:w-10 md:h-8  text-center' onClick={() => changeLocale('en')}><Image  src={en} alt='en'   className='object-contain w-full h-full ' /></button>
      <button className='w-[33px] h-7  md:w-10 md:h-8  text-center' onClick={() => changeLocale('fa')}><Image  src={ir} alt='ir'   className='object-contain w-full h-full ' /></button>
    </div>
  );
}


