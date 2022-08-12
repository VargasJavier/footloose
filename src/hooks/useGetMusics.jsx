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
export const useGetMusics = (
  musics,
  setMusics,
  setListPlay,
  search = "",
  limit = 10
) => {
  if (search) {
    searchAPI(setMusics, search, setListPlay, limit, 1);
  } else searchAPI(setMusics, artists, setListPlay, limit);
  if (musics) {
    setMusics(musics);
    setListPlay(musics);
  }
};
// Search API
const searchAPI = (setMusics, value, setListPlay, limit, status = 0) => {
  status
    ? searchFetch(value, setMusics, options, setListPlay, limit)
    : value.forEach((artist) =>
        searchFetch(artist, setMusics, options, setListPlay, limit)
      );
  return;
};
// Search Fetch
const searchFetch = (artist, setMusics, options, setListPlay, limit) => {
  fetch(`${baseURL}/search?q=${artist}`, options)
    .then((response) => response.json())
    .then((response) => {
      const musicData = response.data.splice(0, limit);
      const data = musicData.map((e) => {
        return { ...e, isPlay: false };
      });
      let musics = sortArray(data);
      setMusics(musics);
      setListPlay(musics);
    })
    .catch((err) => console.error(err));
};
// Función para mezclar
function sortArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
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

export const getPrevMusic = (music, list, setMusicPlay) => {
  const index = list.indexOf(music);
  if (index === 0) setMusicPlay(list[list.length - 1]);
  else setMusicPlay(list[index - 1]);
};

export const getNextMusic = (music, list, setMusicPlay) => {
  const index = list.indexOf(music);
  if (index === list.length - 1) setMusicPlay(list[0]);
  else setMusicPlay(list[index + 1]);
};
