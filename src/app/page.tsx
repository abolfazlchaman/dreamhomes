import { MdOutlineVilla } from "react-icons/md";
import Header from "@/app/Components/Header/Header";
import Featured from "@/app/Components/Featured/Featured";
import Trusted from "@/app/Components/Trusted/Trusted";
import Latest from "@/app/Components/Latest/Latest";
import Banner from "@/app/Components/Banner/Banner";
import Footer from "@/app/Components/Footer/Footer";
import SearchBar from "@/app/Components/SearchBar/SearchBar";

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
