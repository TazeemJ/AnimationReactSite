import { motion, useAnimate, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  let cards = [useAnimation(), useAnimation()];
  function hoverAnimation(index) {
    cards[index].start({ y: "0%" });
  }
  function hoverAnimationEnd(index) {
    cards[index].start({ y: "100%" });
  }
  return (
    <div className="w-full py-20 font-['Neue Montreal']">
      <div className="px-20 w-full border-b-2 pb-20 border-zinc-700">
        <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="mt-10 px-20">
        <div className="cards flex gap-10">
          <motion.div
            onHoverStart={() => hoverAnimation(0)}
            onHoverEnd={() => hoverAnimationEnd(0)}
            className="cardContainer relative w-1/2 h-[60vh]"
          >
            <div className="absolute flex overflow-hidden heading text-7xl font-['Founders Grotesk'] z-[9] -mb-10 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-[#cdea68] font-extrabold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="card w-full h-full  overflow-hidden rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => hoverAnimation(1)}
            onHoverEnd={() => hoverAnimationEnd(1)}
            className="cardContainer relative w-1/2 h-[60vh]"
          >
            <div className="absolute flex overflow-hidden heading text-7xl font-['Founders Grotesk'] z-[9] -mb-10 top-1/2 right-full translate-x-1/2 -translate-y-1/2 text-[#cdea68] font-extrabold">
              {"ViSE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
