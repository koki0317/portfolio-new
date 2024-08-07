"use client";

import React from "react";
import { Button } from "./ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { ModeToggle } from "./ModeToggle";
import { Link as Scroll, animateScroll } from "react-scroll";
import { cedarville_cursive } from "@/app/fonts";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <nav className="w-full bg-inherit h-[56px] shadow-sm fixed top-0 z-50 px-4 lg:px-6">
      <div className="h-full flex flex-row items-center justify-between max-w-[1400px] mx-auto">
        <Scroll
          to="/"
          href="/"
          onClick={scrollToTop}
          className={`font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-300`}
          style={{ fontFamily: cedarville_cursive.style.fontFamily }}
        >
          Koki Takahashi
        </Scroll>
        <div className="flex gap-3 lg:gap-5">
          <ModeToggle />
          <div className="dark:text-gray-100 text-gray-900 text-sm">
            <ul className="hidden gap-8 items-center lg:flex">
              <li>
                <Scroll href="#about-me" smooth to="about-me">
                  About Me
                </Scroll>
              </li>
              <li>
                <Scroll href="#skills" smooth to="skills">
                  Skills
                </Scroll>
              </li>
              <li>
                <Scroll href="#projects" smooth to="projects">
                  Projects
                </Scroll>
              </li>
              <li>
                <Scroll href="#contact" smooth to="contact">
                  <Button variant="default">Contact</Button>
                </Scroll>
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
