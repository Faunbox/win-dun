"use client";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BigForm from "./Large";
import PackageForm from "./Package";
import PeopleForm from "./People";

const Forms = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type")?.toString();

 

  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: -600, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: -600, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-9/12 mt-8 bg-gray-50 bg-opacity-70 backdrop-blur-sm border-1 border-black items-center px-4"
      >
        <div className="flex flex-col justify-center items-center mx-auto">
          {typeParam === "people" && <PeopleForm />}
          {typeParam === "package" && <PackageForm />}
          {typeParam === "large" && <BigForm />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Forms;
