import "./App.css";
import Navbar from "./Navbar";
import HeroComponent from "./HeroComponent";
import AccountStatsComponent from "./AccountStatsComponent";
import SearchBarComponent from "./SearchBarComponent";
import TabelComponent from "./TabelComponent";
import PaginationComponent from "./PaginationComponent";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <AccountStatsComponent />
      <SearchBarComponent />
      <TabelComponent />
      <PaginationComponent />
    </>
  );
};
export default App;
