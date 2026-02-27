"use client";

import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button type="button" onClick={scrollToTop}>
      <div className="h-[6rem] w-[6rem] bg-dark-500 rounded-full border border-white hover:border-transparent hover:bg-white hover:text-dark-500 flex items-center justify-center fixed bottom-[4rem] md:bottom-[6rem] right-[4rem] md:right-[6rem] animate_bounce z-50 transition-all duration-300 ease-out">
        <BsArrowUpShort className="text-[3rem]" />
      </div>
    </button>
  );
}
