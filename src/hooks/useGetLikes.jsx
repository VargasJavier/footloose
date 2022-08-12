export const useGetLikes = async (iduser, setFavorites) => {
  const response = await fetch(`http://localhost:9000/api/favorites/${iduser}`);
  const data = await response.json();
  setFavorites(data.musics);
  console.log(data.musics);
};

export const dropMusic = async (e, id) => {
  const requestInit = {
    method: "DELETE",
  };
  e.preventDefault();
  await fetch(`http://localhost:9000/api/deleteMusic/${id}`, requestInit);
};

export const addMusic = async (e, music) => {
  e.preventDefault();
  const requestInit = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(music),
  };
  const res = await fetch("http://localhost:9000/api/addMusic", requestInit);
};

export const addFavorites = async (iduser, idmusic) => {
  const res = await fetch(
    `http://localhost:9000/api/addFavorites/${iduser}/${idmusic}`
  );
};
