import requests from "../Requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Trending Now'
        fetchURL={requests.fetchTrending}
        isLargeRow
      />
      <Row
        title='Action'
        fetchURL={requests.fetchAction}
        isLargeRow
      />
      <Row
        title='Comedy'
        fetchURL={requests.fetchComedy}
        isLargeRow
      />
      <Row
        title='Horror'
        fetchURL={requests.fetchHorror}
        isLargeRow
      />
      <Row
        title='Documentaries'
        fetchURL={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
