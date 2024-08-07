import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col px-4 lg:px-6 md:pb-10">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center w-full"
      >
        <div className="mt-20 sm:flex sm:items-center sm:justify-center lg:gap-14">
          <div className="text-center sm:text-start">
            <motion.h1
              variants={slideInFromLeft(0.5)}
              className="flex flex-col text-3xl font-black text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl"
            >
              <span className="leading-relaxed">Hello, I&apos;m Koki, </span>
              <span className="">a Frontend Developer</span>
            </motion.h1>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-500 my-5 lg:text-xl max-w-[500px] mx-auto md:mx-0 dark:text-gray-300"
            >
              I&apos;m a passionate about creating exceptional user experiences.
            </motion.p>
            {/* <motion.a variants={slideInFromLeft(1)} className=""> */}
            <motion.div variants={slideInFromLeft(1.2)}>
              <Scroll to="contact" smooth href="#contact">
                <Button variant="default" size="lg">
                  Let&apos;s talk
                </Button>
              </Scroll>
            </motion.div>

            {/* </motion.a> */}
          </div>
          <motion.div variants={slideInFromRight(1.5)}>
            <Image
              src="/me.png"
              width={250}
              height={250}
              sizes="(min-width: 840px) 250px, (min-width: 640px) calc(41.11vw - 87px), 250px"
              alt="Me"
              style={{ width: "100%", height: "auto" }}
              className="max-w-[250px] mx-auto mt-14 sm:mt-0"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
