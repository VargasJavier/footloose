const baseURL = "https://deezerdevs-deezer.p.rapidapi.com";
const artists = ["Duki"];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0a45f52dbmsh11a35f1b242f729p12b701jsnf5544020b84c",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// Obtenemos los datos y los mezclamos
export const useGetMusics = (musics, setMusics, search = "") => {
  if (search) {
    searchAPI(setMusics, search, 1);
  } else searchAPI(setMusics, artists);
  if (musics) setMusics(musics);
};
// Search API
const searchAPI = (setMusics, value, status = 0) => {
  status
    ? searchFetch(value, setMusics, options)
    : value.forEach((artist) => searchFetch(artist, setMusics, options));
  return;
};
// Search Fetch
const searchFetch = (artist, setMusics, options) => {
  fetch(`${baseURL}/search?q=${artist}`, options)
    .then((response) => response.json())
    .then((response) => {
      const musicData = response.data.splice(0, 10);
      const data = musicData.map((e) => {
        return { ...e, isPlay: false };
      });
      setMusics(sortArray(data));
    })
    .catch((err) => console.error(err));
};
// Función para mezclar
function sortArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// Obtenemos el valor del input y filtra según su valor
// export const getValueSearch = (musics, search, setMusics) => {
//   console.log("getValueSearch");
//   const musicsFilters = musics.filter((m) => {
//     return (
//       m.title.toLowerCase().includes(search.toLowerCase()) ||
//       m.album.title.toLowerCase().includes(search.toLowerCase())
//     );
//   });
//   clearMusics(setMusics);
//   console.log("VALOR", musics);
//   setMusics(musicsFilters);
//   return;
// };

// Search track
export const useGetMusic = (id, setItem, setAudio) => {
  fetch(`${baseURL}/track/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      response ? setItem(response) : setItem(false);
      setAudio(response.preview);
    })
    .catch((err) => console.error(err));
};
