import { MdOutlineVilla } from "react-icons/md";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Featured from "./Components/Featured/Featured";
import Trusted from "./Components/Trusted/Trusted";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchBar />
      <Featured />
      <Trusted />
      <span className="flex items-center justify-center  font-bold min-h-screen">
        <MdOutlineVilla size={"2.5rem"} />
        dream homes
      </span>
    </main>
  );
}
