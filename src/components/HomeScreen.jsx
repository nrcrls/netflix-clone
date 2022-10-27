import requests from "../Requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[125vh]">
      <Navbar />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
        <section>
          <Row title="Trending Now" fetchURL={requests.fetchTrending} />
          <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
          {/* <Row title="Action" fetchURL={requests.fetchAction} /> */}
          <Row title="Comedy" fetchURL={requests.fetchComedy} />
          <Row title="Documentary" fetchURL={requests.fetchDocumentaries} />
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;
