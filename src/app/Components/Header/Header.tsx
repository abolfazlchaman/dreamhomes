import bg from "./../../../assets/images/bg.webp";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoChevronDown } from "react-icons/io5";

export default function Header() {
  const navItems = [
    { path: "/", title: "home" },
    { path: "/", title: "Properties" },
    { path: "/", title: "Agencies" },
    { path: "/", title: "About" },
    { path: "/", title: "Contact" },
  ];
  return (
    <div
      className="w-full h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
        <span className="font-semibold text-[30px] text-[#fff7ee]">Dream Homes</span>
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map(({ path, title }) => (
            <a
              href={path}
              key={title}
              className="text-[#fff7ee] font-medium hover:drop-shadow-sm">
              {title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <IoLogoFacebook
            size="1.5rem"
            className="cursor-pointer text-[#fff7ee]"
          />
          <IoLogoTwitter
            size="1.5rem"
            className="cursor-pointer text-[#fff7ee]"
          />
          <IoLogoInstagram
            size="1.5rem"
            className="cursor-pointer text-[#fff7ee]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <span className="font-normal text-[#fff7ee] mt-[40vh] lg:mt-[18vh] lg:text-[64px] md:text-[36px] text-[30px] md:max-w-full md:leading-[70px] text-center drop-shadow-2xl bg-black bg-opacity-45 py-8 w-full">
          Your Most Trusted Real Agency Group!
        </span>
      </div>
      {/* <hr className="mx-12 mt-4"/> */}
      <div className="absolute bottom-10 w-full px-[150px] flex items-center gap-5">
        <IoChevronDown
          color="#fff"
          width="30px"
          height="30px"
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
