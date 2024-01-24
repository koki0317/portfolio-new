import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="w-full h-[56px] fixed top-0 z-50 px-4">
      <div className="h-full flex flex-row items-center justify-between">
        <span className="cursive font-bold text-xl lg:text-2xl text-gray-300">
          Koki Takahashi
        </span>
        <div className="text-white font-semibold hidden gap-8 items-center lg:flex">
          <div>About Me</div>
          <div>Skills</div>
          <div>Projects</div>
          <Button variant="secondary">Contact</Button>
        </div>
        <MobileSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
