import React from "react";
import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      src: "/project1.png",
      alt: "The SAAS website's screenshot",
      text: "Built the SAAS website from design to functionality.",
      slug: "https://www.air360.io/en/",
    },
    {
      src: "/project2.png",
      alt: "The lp's screenshot",
      text: "EC site.",
      slug: "https://ml-test.air360.io/",
    },
    {
      src: "/project3.webp",
      alt: "The technical document's screenshot",
      text: "Created a fully functional technical document.",
      slug: "https://help.air360.io/",
    },
  ];
  return (
    <section id="projects" className="px-4 lg:px-6 py-16">
      <div className="flex flex-col items-center">
        <h2 className="title-text text-center mb-5 lg:mb-8">Projects</h2>
        <Carousel className="w-full max-w-[250px] md:max-w-sm lg:max-w-md">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Link href={project.slug}>
                  <div className="">
                    <Card className="hover:opacity-75 transition">
                      <CardContent className="flex items-center justify-center">
                        <Image
                          loading="lazy"
                          src={project.src}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt={project.alt}
                          style={{ width: "100%", height: "auto" }}
                          className="rounded-t-lg object-cover"
                        />
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm lg:text-base text-gray-500 mt-4 dark:text-gray-300">
                          {project.text}
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
