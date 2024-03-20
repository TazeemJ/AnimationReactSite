import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".003"
      data-scroll-section
      className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#cdea68] text-black"
    >
      <h1 className="font-['Neue Montreal'] text-[4.2vw] leading-[4.5vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 flex">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#2c2e28af] rounded-3xl overflow-hidden object-fill">
          <img
            className="w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
