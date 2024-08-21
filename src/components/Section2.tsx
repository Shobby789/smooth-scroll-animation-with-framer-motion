import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

const Section2: React.FC<{
  image: StaticImageData;
  tag: string;
  title: string;
  description: string;
}> = ({ image, tag, title, description }) => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={SectionRef} className="relative h-screen overflow-hidden">
      <motion.div className="absolute w-full h-[120%] -z-10" style={{ top: y }}>
        {/* <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src={image} alt="Overview" fill className="object-cover" /> */}

        <div className="w-full grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-4 p-24">
            <span className="uppercase text-xs text-black">{tag}</span>
            <h1 className="font-serif text-8xl max-w-[25ch] text-black">
              {title}
            </h1>
            <p className="max-w-[50ch] text-black">{description}</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150796962.jpg?t=st=1724215996~exp=1724219596~hmac=d904f2c2ccb97e35a6da78a49e6fddcfa0ff4d12062fb009a36f9db919fddc1b&w=1060"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section2;
