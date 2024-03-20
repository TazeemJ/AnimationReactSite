import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
function Landing() {
  return (
    <div
      // data-scroll
      // data-scroll-speed=".1"
      // data-scroll-section
      className="w-full min-h-full bg-zinc-900 pt-1 font-['Founders Grotesk'] mb-16"
    >
      <div className="textStructure mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
          (textMasker, index) => {
            return (
              <div className="masker" key={index}>
                <div className="w-fit flex items-center">
                  {index == 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
                      className="w-[9vw] h-[5.2vw] relative top-[.5vw] bg-red-500 rounded-md overflow-hidden"
                    >
                      <img
                        className="w-full h-full"
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="font-['Founders Grotesk'] leading-[6.5vw] tracking-tighter font-medium text-[7.5vw] uppercase">
                    {textMasker}
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[8vw] flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-medium tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start  flex items-center gap-3">
          <div className="px-4 py-1 font-light text-md uppercase  border-[2px] border-zinc-400 rounded-full">
            Start the project
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
            <span className="rotate-45">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
