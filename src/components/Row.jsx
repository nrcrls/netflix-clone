import axios from "../axios";
import { useEffect, useState } from "react";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="ml-12 mt-4 ">
      <h2 className="text-white text-xl font-semibold py-2">{title}</h2>
      <div className="flex mt-2 overflow-y-hidden overflow-x-scroll hover:scroll-smooth scrollbar-hide">
        {movies.map(movie =>
          <img
            className={`w-64 h-64 px-4 ${isLargeRow && `h-72`}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
          />
        )}
      </div>
    </div>
  );
}

export default Row;
