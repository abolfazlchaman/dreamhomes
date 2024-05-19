import { MdOutlineVilla } from "react-icons/md";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Featured from "./Components/Featured/Featured";
import Trusted from "./Components/Trusted/Trusted";
import Latest from "./Components/Latest/Latest";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchBar />
      <Featured />
      <Trusted />
      <Latest />
      <Banner />
      <Footer />
      <span className="flex flex-col items-center justify-center text-center font-bold min-h-screen">
        <MdOutlineVilla size={"2.5rem"} />
        Dream Homes LLC. {new Date().getFullYear()}
        <br />
        &copy;All rights reserved.
        <span className="font-light mt-12">
          Developed and Maintained by <br />
          <a
            className="underline underline-offset-4"
            href="http://abolfazlchaman.ir"
            target="_blank"
            rel="noopener noreferrer">
            Abolfazl Chaman
          </a>
          .
        </span>
      </span>
    </main>
  );
}
