"use client";

import { Skill_data } from "@/constants";
import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>();
  useEffect(() => {
    if (theme == "dark") {
      return setIsDark(true);
    }
    return setIsDark(false);
  }, [theme]);

  return (
    <section id="skills" className="px-4 lg:px-6 py-20">
      <div className="">
        <h2 className="title-text text-center mb-5">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {Skill_data.map((skill) => (
            <skill.src
              width={32}
              height={32}
              key={skill.alt}
              fill={isDark ? "white" : "black"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
