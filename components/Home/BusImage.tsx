"use client";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const BusImageComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 0.6"],
  });
  //TODO: ogarnac animacje busa
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const xProgress = useTransform(scrollYProgress, [0, 1], [1, 0.5]);


  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
      }}
      layout
      className="hidden lg:block mx-auto p-4 md:p-0 lg:col-span-1 translate-x-11"
    >
      <Image
        src={"/images/busikk.png"}
        alt="tak"
        width={1240}
        height={720}
        className="lg:absolute lg:-top-24 lg:-left-[38%] xl:-left-[30%] 2xl:-left-[25%]"
      />
    </motion.div>
  );
};

export default BusImageComponent;
