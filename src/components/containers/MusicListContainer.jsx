import { useContext, useEffect } from "react";
import { useGetMusics } from "../../hooks/useGetMusics";
import MusicList from "../music/MusicList";
import Search from "../search/Search";
import HeaderBar from "../header/HeaderBar";
import Footer from "../footer/Footer";
import { MusicContext } from "../../context/MusicContext";

const MusicListContainer = () => {
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

  useEffect(() => {
    console.log(user);
    search
      ? useGetMusics(musics, setMusics, setListPlay, search)
      : useGetMusics(musics, setMusics, setListPlay);
  }, [search]);

  useEffect(() => {}, [isPlay]);

  return (
    <>
      <section className='container__bar'>
        <HeaderBar />
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

export default MusicListContainer;
