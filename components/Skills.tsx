"use client";

import { Skill_data } from "@/constants";
import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>();
  useEffect(() => {
    if (theme == "dark") {
      return setIsDark(true);
    }
    return setIsDark(false);
  }, [theme]);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationDelay = 0.2;

  return (
    <section id="skills" className="relative px-4 lg:px-6 py-16">
      <div className="">
        <h2 className="title-text text-center mb-5 lg:mb-8">Skills</h2>
        <div
          ref={ref}
          className="flex flex-wrap justify-center gap-3 lg:gap-6 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto"
        >
          {Skill_data.map((skill, index) => (
            <motion.div
              key={skill.alt}
              initial="hidden"
              variants={imageVariants}
              animate={inView ? "visible" : "hidden"}
              custom={index}
              transition={{ delay: index * animationDelay }}
            >
              <skill.src
                fill={isDark ? "white" : "black"}
                className="w-8 h-8 lg:w-12 lg:h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
