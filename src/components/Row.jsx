import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "../axios";
import { useEffect, useRef, useState } from "react";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  const handleClick = (direction) => {
    setIsMoved(true)

    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      listRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">

      {/* title */}
      <h2 className="cursor-pointer md:mt-16 md:pt-24 w-56 text-sm md:text-2xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">{title}</h2>

      {/* slider buttons */}
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={`absolute top-0 bottom-0 left-0 z-40 m-auto w-[52px] h-full cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-[#161616] group-hover:bg-opacity-75 ${!isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        {/* movie thumbnails */}
        <div className="flex relative space-x-0.5 overflow-y-hidden overflow-x-scroll scrollbar-hide md:space-x-4 md:p-2 transition-all duration-100 ease"
          ref={listRef}
        >
          {movies.map((movie) =>
            <img
              className='cursor-pointer object-cover rounded h-28 min-w-[180px] transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
              key={movie.id}
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.name}
            />
          )}
        </div>

        <ChevronRightIcon className="absolute top-0 bottom-0 right-0 z-40 m-auto w-[52px] h-full  cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-[#161616] group-hover:bg-opacity-75"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Row;
