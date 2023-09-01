"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { BsMessenger, BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";

const variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

const LinkElement = ({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href: string;
  target?: string | null;
}) => {
  return (
    <motion.div
      // initial={{ x: 100, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.5 }}
      variants={variants}
    >
      <Link href={href} className=" text-white" target={target ? target : ""}>
        {children}
      </Link>
    </motion.div>
  );
};

const CallCloud = () => {
  return (
    <div className="fixed bottom-[16%] md:bottom-[48%] right-0 flex mix-blend-difference">
      <motion.div
        className="flex flex-col h-full justify-around items-center gap-5 p-4"
        initial="initial"
        animate="animate"
        transition={{
          duration: 1,
          delay: 1,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
      >
        <LinkElement href="tel:+48505216526">
          <BsTelephoneOutbound size={25} />
        </LinkElement>
        <LinkElement href="https://m.me/107516904418538" target={"_blank"}>
          <BsMessenger size={25} />
        </LinkElement>
        <LinkElement
          href="https://api.whatsapp.com/send?phone=505216526"
          target={"_blank"}
        >
          <BsWhatsapp size={25} />
        </LinkElement>
      </motion.div>
    </div>
  );
};

export default CallCloud;
