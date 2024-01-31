"use client";

import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StarsCanvas from "@/components/StarBackground";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

export default function Home() {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>();
  useEffect(() => {
    if (theme == "dark") {
      return setIsDark(true);
    }
    return setIsDark(false);
  }, [theme]);
  return (
    <main className="mt-[56px]">
      <div className="max-w-[1400px] mx-auto">
        {isDark && <StarsCanvas />}
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
