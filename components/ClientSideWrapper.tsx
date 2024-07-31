"use client";

import { useTheme } from "next-themes";
import Skills from "./Skills";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects2 from "./Projects2";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import StarsCanvas from "./StarBackground";
import Contact from "./Contact";

export default function ClientSideWrapper() {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>();
  useEffect(() => {
    if (theme == "dark") {
      return setIsDark(true);
    }
    return setIsDark(false);
  }, [theme]);
  return (
    <>
      {isDark && <StarsCanvas />}
      <Hero />
      <AboutMe />
      <Skills />
      <Projects2 />
      <Contact />
    </>
  );
}
