// import requests from "../Requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
// import Row from "./Row";

function HomeScreen() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Navbar />
      <Banner />
    </div>
  );
}

export default HomeScreen;
