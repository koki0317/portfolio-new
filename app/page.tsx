"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ParticlesContainer from "@/components/ParticlesContainer";
import { TypeAnimation } from "react-type-animation";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
