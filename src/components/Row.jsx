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
    <div>
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <div className="flex gap-2">
        {movies.map(movie =>
          <img
            className="w-48 h-48"
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
