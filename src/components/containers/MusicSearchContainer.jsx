import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import Footer from "../footer/Footer";
import MusicList from "../music/MusicList";
import Search from "../search/Search";

const MusicSearchContainer = () => {
  const musicContext = useContext(MusicContext);
  const {
    listFavorite,
    setFavorite,
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
  } = musicContext;

  return (
    <>
      <section>
        <Search
          setSearch={setSearch}
          value={value}
          setValue={setValue}
          user={user}
        />
        <MusicList
          musics={musics}
          isPlay={isPlay}
          setPlay={setPlay}
          value={search}
          setMusicPlay={setMusicPlay}
          setMusics={setMusics}
          setListPlay={setListPlay}
        />
      </section>
      <Footer
        musicPlay={musicPlay}
        listPlay={listPlay}
        setMusicPlay={setMusicPlay}
        isPlay={isPlay}
        setPlay={setPlay}
      />
    </>
  );
};
export default MusicSearchContainer;
