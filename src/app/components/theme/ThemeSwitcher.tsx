"use client";

import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const currentTheme = localStorage.getItem("theme");
    if(!currentTheme){
    localStorage.setItem("theme", "dark");

    }
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className=" w-8 h-8 lg:w-9 lg:h-9 rounded-full flex justify-center items-center cursor-pointer">
      <button onClick={toggleTheme} className={isDarkMode ? "hidden" : "block"}>
        {/* SVG برای حالت روشن */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 56 56"
        >
          <path
            fill="currentColor"
            d="M41.149 36.156c-12.68 0-20.79-7.945-20.79-20.648c0-2.625.633-6.375 1.454-8.32c.234-.54.257-.868.257-1.102c0-.633-.468-1.336-1.359-1.336c-.281 0-.82.07-1.336.258C10.703 8.477 4.891 17.805 4.891 27.625c0 13.781 10.5 23.625 24.234 23.625c10.078 0 18.844-6.117 21.75-13.758a4.5 4.5 0 0 0 .234-1.312c0-.867-.703-1.453-1.36-1.453c-.304 0-.562.07-1.007.21c-1.804.586-4.71 1.22-7.593 1.22"
          />
        </svg>
      </button>
      <button onClick={toggleTheme} className={isDarkMode ? "block" : "hidden"}>
        {/* SVG برای حالت تاریک */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          color="#FFFFFF"
        >
          <path fill="currentColor" d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}