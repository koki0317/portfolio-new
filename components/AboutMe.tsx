import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <section
        id="about-me"
        className="relative px-4 lg:px-6 py-20 pb-15 md:pt-25"
      >
        <div className="text-center dark:text-gray-100">
          <h2 className="title-text mb-4 lg:mb-6">About Me</h2>
          <p className="text-gray-500 dark:text-gray-300 max-w-[550px] mx-auto lg:text-lg lg:max-w-[650px]">
            I&apos;m a Tokyo-based Front-End Engineer with over one year of
            experience in the startup. My strengths lie in communication skills,
            adaptability across diverse settings, self-improvement, and skill
            acquisition.
          </p>
        </div>
        {theme === "dark" && (
          <div className="z-[-10] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 absolute">
            <video
              className=""
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/space-laptop.webm"
            />
          </div>
        )}
      </section>
    )
  );
};

export default AboutMe;
