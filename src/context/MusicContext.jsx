import { createContext, useState } from "react";

export const MusicContext = createContext([]);

const MusicProvider = (props) => {
  const [listFavorite, setFavorites] = useState([]);

  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [isPlay, setPlay] = useState(false);
  const [musicPlay, setMusicPlay] = useState({});
  const [listPlay, setListPlay] = useState([]);
  const [user, setUser] = useState({});
  const [id, setID] = useState(1);

  const addUser = (user) => {
    setUser(user);
  };

  const addID = () => {
    setID(id + 1);
  };

  return (
    <>
      <MusicContext.Provider
        value={{
          listFavorite,
          setFavorites,
          musics,
          setMusics,
          search,
          setSearch,
          value,
          setValue,
          isPlay,
          setPlay,
          musicPlay,
          setMusicPlay,
          listPlay,
          setListPlay,
          user,
          setUser,
          addID,
          id,
          addUser: addUser,
        }}
      >
        {props.children}
      </MusicContext.Provider>
    </>
  );
};
export default MusicProvider;
