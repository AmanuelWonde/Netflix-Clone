const API_KEY = 'b56854446dc53ef102d4fe7d1608bce1';
const baseURL = 'https://api.themoviedb.org/3/';
const requests = {
  fetchTrending: `${baseURL}${`trending/all/day?api_key=${API_KEY}`}`,
  fetchNetflixOriginals: `${baseURL}${`/discover/tv?api_key=${API_KEY}&with_networks=213`}`,
  fetchTopRatedMovies: `${baseURL}${`/movie/top_rated?api_key=${API_KEY}&language=en-US`}`,
  fetchActionMovies:  `${baseURL}${`/discover/movie?api_key=${API_KEY}&with_genres=28`}`,
  fetchComedyMovies: `${baseURL}${`/discover/movie?api_key=${API_KEY}&with_genres=35`}`,
  fetchHorrorMovies: `${baseURL}${`/discover/movie?api_key=${API_KEY}&with_genres=27`}`,
  fetchRomanceMovies:`${baseURL}${`/discover/movie?api_key=${API_KEY}&with_genres=10749`}`,
  fetchDocumentaries:`${baseURL}${`/discover/movie?api_key=${API_KEY}&with_genres=99`}`,
};
export default requests;
