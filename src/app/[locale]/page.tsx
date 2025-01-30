import { TypewriterEffectSmoothDemo } from "../components/main/main";
import Projects from "../components/main/projects";
import Navbar from "../components/main/Navbar";

import { Skills } from "../components/main/skils";
export default function Home() {

  return (

   <div className="mx-auto text-center   ">
    <Navbar />
    <TypewriterEffectSmoothDemo />
    <Skills />
    <Projects />

    
  
    
   </div>
  );
}

