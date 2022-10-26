const URL = "https://api.themoviedb.org/3";
const API_KEY = "bfa7a4a0c19f8edb6f4781291650ff27"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
