import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className="px-4 lg:px-6 py-20 pb-15 md:pt-25">
      <div className="text-center dark:text-gray-100">
        <h2 className="title-text mb-4 lg:mb-6">About Me</h2>
        <p className="text-gray-500 dark:text-gray-300 max-w-[550px] mx-auto lg:text-lg lg:max-w-[650px]">
          I&apos;m a Tokyo-based Front-End Engineer with over one year of
          experience in the startup. My strengths lie in communication skills,
          adaptability across diverse settings, self-improvement, and skill
          acquisition.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
