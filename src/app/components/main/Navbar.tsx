import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar(){
      const text = useTranslations("public");
    return (
        <>
        <div className="fixed flex items-start justify-around w-full top-2  " >
     
     <div><ThemeSwitcher /></div>
     <p className="text-neutral-600 font-bold md:text-lg dark:text-neutral-200  sm:text-base  mb-36  ">
        {text("god")}
     </p>
     <div className="text-white"><LanguageSwitcher /></div>
    </div>
        </>
    )

}