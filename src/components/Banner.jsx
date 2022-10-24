
function Banner() {
  return (
    <header className="bg-black h-[448px] bg-no-repeat bg-cover bg-center relative object-contain">
      <div className="ml-8 md:ml-14 pt-40 text-white">
        <h1 className="text-4xl font-bold mb-2">Movie Name</h1>
        <div className="mb-2">
          <button className="cursor-pointer bg-red-500 hover:bg-black transition-all duration-200 text-white font-semibold uppercase rounded-sm px-4 py-2">Play</button>
          <button className="cursor-pointer bg-red-500 hover:bg-black transition-all duration-200 text-white font-semibold uppercase rounded-sm px-4 py-2 mx-2">My List</button>
        </div>
        <h1>The description goes here.</h1>
        <div />
      </div>
    </header>
  );
}

export default Banner;
