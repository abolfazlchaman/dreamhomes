import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center py-16 gap-10 bg-[#1d1d1d]">
      <div className="flex flex-col items-center gap-2">
        <div className="font-semibold text-white text-[28px]">Search Our Listings</div>
        <p className="font-light text-[15px] text-gray-200 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi maiores sapiente,
          distinctio architecto fugit vel optio. Repudiandae corporis temporibus reiciendis
          repellendus sapiente error aut deleniti tempora in perferendis? Tempora?
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col w-full px-3 py-2 border border-r-gray-300 rounded-lg bg-white">
        <IoSearchOutline
          color="#333"
          className="hidden md:block"
        />
        <div className="flex flex-col w-full items-start justify-center gap-1 md:border-0 border-1 ml-8 border-gray-300 md:pr-0 pr-10">
          <span className="w-fit text-[#333] font-semibold text-[14px] px-3 ml-3">
            Property Location
          </span>
          <select className="outline-none bg-transparent text-[#333] p-0 px-3 w-full ml-2">
            <option value="all">All Locations</option>
            <option value="canada">Canada</option>
            <option value="united States">United States</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-1 border-1 border-gray-300 ml-8 md:mt-0 md:pr-0 pr-8">
          <span className="w-fit text-[#333] font-semibold text-[14px] px-3 ml-3">
            Date of Listing
          </span>
          <select className="outline-none bg-transparent text-[#333] p-0 px-5 w-full ">
            <option value="all">All Dates</option>
            <option value="this week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-1 border-1 border-gray-300 ml-8 md:mt-0 md:pr-0 pr-8">
          <span className="w-fit text-[#333] font-semibold text-[14px] px-3 ml-3">
            Property Type
          </span>
          <select className="outline-none bg-transparent text-[#333] p-0 px-5 w-full ">
            <option value="all">All Property Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>
        <button className="text-white bg-[#333] px-5 py-2 rounded-lg ml-0 md:ml-5 shadow-xl md:mt-0 mt-8 md:w-fit w-full">
          Search
        </button>
      </div>
    </div>
  );
}
