import React from "react";

const Cards = () => {
  return (
    <div className="w-full bg-zinc-900 h-screen flex gap-5 items-center px-20">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card w-full h-full  bg-[#004d43] rounded-xl relative">
          <div className="flex items-center justify-center h-[100%]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 p-9">
            <button className="text-[#cdea68] border-[#cdea68] border-[1px] px-3 py-1 rounded-full text-[14px]">
              ©2019–2022
            </button>
          </div>
        </div>
      </div>
      <div className="cardContainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative h-full w-1/2 bg-[rgb(28,41,39)] rounded-xl">
          <div className="flex items-center justify-center h-[100%]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 p-9">
            <button className="text-white  border-[2px] px-3 py-1 rounded-full text-[14px]">
              Rating 5.0 on Clutch
            </button>
          </div>
        </div>
        <div className="card relative h-full w-1/2 bg-[rgb(28,41,39)] rounded-xl">
          <div className="flex items-center justify-center h-[100%]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 p-9">
            <button className="text-white border-[2px] px-3 py-1 rounded-full text-[14px]">
              Business Bootcamp Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
