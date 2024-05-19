import { IoArrowForwardCircle, IoBedOutline, IoTv, IoWifi } from "react-icons/io5";

import four from "../../../assets/images/four.webp";
import three from "../../../assets/images/three.webp";
import two from "../../../assets/images/two.webp";
import one from "../../../assets/images/one.webp";

import React from "react";

export default function Featured() {
  return (
    <div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center py-16 gap-10">
      <div className="flex flex-col items-center gap-2">
        <div className="font-semibold text-[28px] text-[#416477]">Featured Listings</div>
        <p className="font-light text-[15px] text-gray-600 text-center">
          Discover our handpicked selection of featured homes, showcasing the finest properties
          available. Find your dream home today.
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col items-start gap-4 md:h-[650px] h-[900px]">
        <div
          className="w-full md:w-1/2 h-full rounded-xl bg-cover bg-center relative flex flex-col items-center justify-end py-5"
          style={{ backgroundImage: `url(${four.src})` }}>
          <IoArrowForwardCircle
            size="2.5rem"
            width="35px"
            height="35px"
            color="#333"
            className="absolute top-5 right-5 rotate-[-40deg] cursor-pointer"
          />
          <div className="rounded-xl flex flex-wrap w-[95%] bg-[#1d1d1d] md:items-center items-start justify-between px-5 py-3 md:gap-0 gap-8 shadow-xl">
            <div className="flex flex-col gap-1 justify-center">
              <div className="font-semibold text-white text-[25px]">Luxury Villa</div>
              <div className="text-gray-200 text-[15px]">Code 032</div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-5">
              <div className="flex flex-col gap-1 items-start">
                <IoBedOutline
                  size="2.5rem"
                  color="#bdbdbd"
                  width="40px"
                  height="40px"
                />
                <span className="text-[14px] font-medium text-[#bdbdbd]">2 Bedrooms</span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <IoWifi
                  size="2.5rem"
                  color="#bdbdbd"
                  width="40px"
                  height="40px"
                />
                <span className="text-[14px] font-medium text-[#bdbdbd]">Free Wifi</span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <IoTv
                  size="2.5rem"
                  color="#bdbdbd"
                  width="40px"
                  height="40px"
                />
                <span className="text-[14px] font-medium text-[#bdbdbd]">Fully Furnished</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <div className="text-white font-semibold text-[25px] ">$13,500,000</div>
              <div className="text-gray-200 text-[15px]">Vancouver, BC</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
          <div
            className="w-full h-1/2 rounded-xl bg-cover bg-center relative"
            style={{ backgroundImage: `url(${two.src})` }}>
            <IoArrowForwardCircle
              size="2.5rem"
              width="35px"
              height="35px"
              color="#333"
              className="absolute top-5 right-5 rotate-[-40deg] cursor-pointer"
            />
          </div>
          <div className="flex w-full items-center gap-4 h-1/2">
            <div
              className="w-full h-full rounded-xl bg-cover bg-center relative"
              style={{ backgroundImage: `url(${one.src})` }}>
              <IoArrowForwardCircle
                size="2.5rem"
                width="35px"
                height="35px"
                color="#333"
                className="absolute top-5 right-5 rotate-[-40deg] cursor-pointer"
              />
            </div>
            <div
              className="w-full h-full rounded-xl bg-cover bg-center relative"
              style={{ backgroundImage: `url(${three.src})` }}>
              <IoArrowForwardCircle
                size="2.5rem"
                width="35px"
                height="35px"
                color="#333"
                className="absolute top-5 right-5 rotate-[-40deg] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
