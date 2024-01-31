import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-inherit h-[56px] shadow-sm fixed top-0 z-50 px-4 lg:px-6">
      <div className="h-full flex flex-row items-center justify-between max-w-[1400px] mx-auto">
        <span className="cursive font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-300">
          Koki Takahashi
        </span>
        <div className="flex gap-3 lg:gap-5">
          <ModeToggle />
          <div className="dark:text-gray-100 text-gray-900 text-sm">
            <ul className="hidden gap-8 items-center lg:flex">
              <li>
                <Link href="#about-me">About Me</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">
                  <Button variant="secondary">Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
