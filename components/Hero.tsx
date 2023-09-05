import { TypeAnimation } from "react-type-animation";
import { Swirl } from "ambient-cbg";

const Hero = () => {
  return (
    <div className="h-screen">
      {/* <ParticlesContainer /> */}
      <Swirl />
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-4xl text-center">Hello</h1>
          {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am Koki",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "I am a frontend developer",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
