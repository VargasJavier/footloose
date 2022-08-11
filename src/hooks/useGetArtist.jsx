const baseURL = "https://deezerdevs-deezer.p.rapidapi.com";
const artists = [
  {
    name: "TiagoPZK",
    id: "49364062",
  },
];

export const useGetArtist = (setArtist) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0a45f52dbmsh11a35f1b242f729p12b701jsnf5544020b84c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  fetch(`${baseURL}/artist/${artists[0].id}`, options)
    .then((response) => response.json())
    .then((response) => {
      const fans = formatFan(response.nb_fan);
      response.nb_fan = fans;
      setArtist(response);
    })
    .catch((err) => console.error(err));
};

const formatFan = (numb) => {
  let numberFormat = numb.toString().split(".");
  numberFormat[0] = numberFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberFormat.join(".");
};

export const volumenControl = (audio, value) => {
  let music = new Audio();
  music.src = audio;
  music.loop = true;
  music.volume = value;
};
