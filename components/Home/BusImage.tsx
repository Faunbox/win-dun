"use client";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const BusImageComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const traslateXProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["-400px", "0px"]
  );
  const traslateYProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["-400px", "0px"]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
        translateX: traslateXProgress,
        translateY: traslateYProgress,
      }}
      layout
      className="hidden lg:block mx-auto p-4 md:p-0 lg:col-span-1 translate-x-11"
    >
      <Image
        src={"/images/busikk.png"}
        alt="tak"
        width={1240}
        height={720}
        className=""
      />
    </motion.div>
  );
};

export default BusImageComponent;
