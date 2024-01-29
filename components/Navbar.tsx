import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-inherit h-[56px] shadow-sm fixed top-0 z-50 px-4 lg:px-6">
      <div className="h-full flex flex-row items-center justify-between max-w-[1400px] mx-auto">
        <span className="cursive font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-300">
          Koki Takahashi
        </span>
        <div className="flex gap-5">
          <ModeToggle />
          <div className="dark:text-gray-100 text-gray-900 font-semibold hidden gap-8 items-center lg:flex">
            <div>About Me</div>
            <div>Skills</div>
            <div>Projects</div>
            <Button variant="secondary">Contact</Button>
          </div>
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
