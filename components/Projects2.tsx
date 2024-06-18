"use client";

import Image from "next/image";
import NextJs from "@/public/skills/nextjs.svg";
import Prisma from "@/public/skills/prisma.svg";
import Tailwind from "@/public/skills/tailwind.svg";
import Supabase from "@/public/skills/supabase.svg";
import Typescript from "@/public/skills/typescript.svg";
import NuxtJs from "@/public/skills/nuxt.svg";
import Figma from "@/public/skills/figma.svg";
import Git from "@/public/skills/git.svg";
import Playwright from "@/public/skills/playwright.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Projects2 = () => {
  const techStack1 = [
    {
      id: "tooltip-logo-nextjs",
      skill: NextJs,
      label: "Next.js",
      dark: true,
    },
    {
      id: "tooltip-logo-typescript",
      skill: Typescript,
      label: "Typescript",
      dark: false,
    },
    {
      id: "tooltip-logo-tailwind",
      skill: Tailwind,
      label: "Tailwind",
      dark: false,
    },
    {
      id: "tooltip-logo-prisma",
      skill: Prisma,
      label: "Prisma",
      dark: true,
    },
    {
      id: "tooltip-logo-supabase",
      skill: Supabase,
      label: "Supabase",
      dark: false,
    },
  ];

  const techStack2 = [
    {
      id: "tooltip-logo-nuxtjs",
      skill: NuxtJs,
      label: "Nuxt.js",
      dark: false,
    },
    {
      id: "tooltip-logo-typescript",
      skill: Typescript,
      label: "Typescript",
      dark: false,
    },
    {
      id: "tooltip-logo-tailwind",
      skill: Tailwind,
      label: "Tailwind",
      dark: false,
    },
    {
      id: "tooltip-logo-figma",
      skill: Figma,
      label: "Figma",
      dark: false,
    },
    {
      id: "tooltip-logo-git",
      skill: Git,
      label: "Git",
      dark: false,
    },
  ];

  const techStack3 = [
    {
      id: "tooltip-logo-nuxtjs",
      skill: NuxtJs,
      label: "Nuxt.js",
      dark: false,
    },
    {
      id: "tooltip-logo-typescript",
      skill: Typescript,
      label: "Typescript",
      dark: false,
    },
    {
      id: "tooltip-logo-tailwind",
      skill: Tailwind,
      label: "Tailwind",
      dark: false,
    },
    {
      id: "tooltip-logo-playwright",
      skill: Playwright,
      label: "Playwright",
      dark: false,
    },
  ];

  const projects = [
    {
      src: "/project4.png",
      alt: "LP screenshot",
      title: "JuniDev",
      url: "https://job-posts.vercel.app/",
      description: "Job platform for junior developers.",
      skills: techStack1,
    },
    {
      src: "/project1.png",
      alt: "LP screenshot",
      title: "SAAS website",
      url: "https://www.air360.io/en/",
      description: "Built the SAAS website from design to functionality.",
      skills: techStack2,
    },
    {
      src: "/project2.png",
      alt: "LP screenshot",
      title: "E-commerce demo site",
      url: "https://ml-test.air360.io/",
      description:
        "Built an e-commerce site to demonstrate in-house products and generate traffic using Playwright.",
      skills: techStack3,
    },
  ];
  return (
    <section className="antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="title-text text-center mb-5 lg:mb-8">Projects</h2>
        </div>

        {projects.map(
          ({ src, alt, title, url, description, skills }, index) => (
            <div key={src} className="mt-12 space-y-16 sm:mt-20">
              <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between gap-y-8 sm:gap-y-12 lg:gap-x-16">
                <div
                  className={cn(
                    "relative aspect-video w-full max-w-xl",
                    index % 2 === 0 && "lg:order-1 lg:ml-auto"
                  )}
                >
                  <Image
                    className="object-cover rounded-lg shadow-lg"
                    src={src}
                    alt={alt}
                    fill
                  />
                </div>

                <div className="w-full space-y-6 lg:max-w-lg shrink-0">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                      {title}
                    </h3>
                    <a
                      href={url}
                      target="_blank"
                      title=""
                      className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      {url}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                    <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 !mb-8">
                    {skills.map(({ id, skill: Skill, label, dark }) => (
                      <div key={id} className="relative group">
                        <Skill
                          data-tooltip-target={id}
                          className={cn("h-8 w-8", dark && "dark:fill-white")}
                        />
                        <div
                          id={id}
                          role="tooltip"
                          className="absolute mb-2 bottom-full transform -translate-x-1/2 z-10 left-1/2 invisible group-hover:visible px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700"
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={url}>
                    <Button>
                      View
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects2;
