import { slideInFromLeft } from "@/utils/motion";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col h-full w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center w-full"
      >
        <div className="px-4 mt-20 lg:px-6 md:flex md:items-center">
          <div className="text-center">
            <motion.h1
              variants={slideInFromLeft(0.5)}
              className="flex flex-col text-3xl font-black text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl"
            >
              <span className="leading-relaxed">Hello, I&apos;m Koki, </span>
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I&apos;m Koki{" "}
            </span> */}
              <span className="">a Frontend Developer</span>
            </motion.h1>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-500 my-5 lg:text-xl max-w-[500px] mx-auto dark:text-gray-300"
            >
              I&apos;m a passionate about creating exceptional user experiences.
            </motion.p>
            {/* <motion.a variants={slideInFromLeft(1)} className=""> */}
            <Button variant="default" size="lg">
              Let&apos;s talk
            </Button>
            {/* </motion.a> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
