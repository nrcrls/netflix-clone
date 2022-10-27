import axios from "../axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

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
    <header className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">

      <div className="absolute top-0 left-0 -z-10 w-screen h-[95vh]">
        <img
          className='object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>

      <div className="ml-6 py-4 md:py-16 lg:ml-12">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold md:mb-6">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{truncate(movie?.overview, 150)}</p>
        <div className="flex gap-x-2 mt-4">
          <button className="banner--btn hover:opacity-75 text-black bg-white md:text-xl md:px-8 md:py-2.5"><FaPlay className="text-black h-4 w-4 md:h-7 md:w-7" />Play</button>
          <button className="banner--btn hover:opacity-25 text-white bg-black opacity-50 md:text-xl md:px-8 md:py-3.5"><AiOutlineInfoCircle className="text-white h-4 w-4 md:h-7 md:w-7" />More Info</button>
        </div>
      </div>
    </header >
  );
}

export default Banner;
