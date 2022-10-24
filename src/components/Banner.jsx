import axios from "../axios";
import { useEffect, useState } from "react";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, [])

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='w-full h-[100vh]'>

      <div className='absolute w-full h-full bg-gradient-to-t from-black' />
      <img
        className='w-full h-full object-cover object-center'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      <div className="absolute top-[15%] ml-8 md:ml-14 w-[550px] pt-40  text-white">
        <h1 className="text-5xl font-bold mb-4">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="mb-2">
          <button className="cursor-pointer bg-red-500 hover:bg-gray-700 transition-all duration-200 text-white font-semibold uppercase rounded-sm px-4 py-2">Play</button>
          <button className="cursor-pointer bg-red-500 hover:bg-gray-700 transition-all duration-200 text-white font-semibold uppercase rounded-sm px-4 py-2 mx-2">My List</button>
        </div>
        <h1>{truncate(movie?.overview, 150)}</h1>

      </div>
    </header >
  );
}

export default Banner;
