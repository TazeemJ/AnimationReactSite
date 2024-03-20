import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full bg-[#004d43]  rounded-tl-3xl rounded-tr-3xl py-20">
      <div className="text  border-t-2 border-b-2 border-zinc-100 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-[17vw] leading-none tracking-tighter font-['Founders Grotesk'] uppercase font-bold pr-56"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-[17vw] leading-none tracking-tighter font-['Founders Grotesk'] uppercase font-bold pr-56"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
