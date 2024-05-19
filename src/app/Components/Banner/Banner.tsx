import banner from "../../../assets/images/banner.webp";

const Banner = () => {
  return (
    <div className="w-full md:px-[150px] px-5 md:py-16 py-8 h-[600px]">
      <div
        className="w-full h-full bg-center bg-cover flex items-center rounded-xl"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="bg-[#000000a1] w-full lg:px-16 px-10 h-fit py-4 flex items-center justify-center rounded-xl ">
          <div className="flex flex-col items-start w-full">
            <span className="text-[15px] text-white lg:w-fit lg:text-left w-full text-center">
              Our Mission
            </span>
            <span className="font-semibold text-[50px] text-center text-white">
              We Will Find The Perfect Places For You!
            </span>
            <p className="mt-3 text-gray-200 max-w-[500px] lg:text-left text-justify">
              Whether you're looking to buy your first home, invest in a property, or find the
              perfect rental, our team is here to guide you every step of the way. With extensive
              knowledge of the real estate market, we provide personalized service to help you find
              a place that truly feels like home.
            </p>
            <button className="text-[#333] lg:mx-0 mx-auto rounded-full shadow-lg bg-white font-medium outline-none border-0 px-5 py-3 w-fit mt-5 z-50">
              Search our Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
