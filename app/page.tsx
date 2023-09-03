"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function Home() {
  const route = usePathname();
  console.log(route);
  return (
    <div className="h-screen">
      <div>Home</div>
      <ParticlesContainer />
    </div>
  );
}
