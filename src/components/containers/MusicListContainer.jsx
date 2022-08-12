import { useContext, useEffect } from "react";
import { useGetMusics } from "../../hooks/useGetMusics";
import MusicList from "../music/MusicList";
import Search from "../search/Search";
import HeaderBar from "../header/HeaderBar";
import Footer from "../footer/Footer";
import { MusicContext } from "../../context/MusicContext";
import { useGetLikes } from "../../hooks/useGetLikes";

const MusicListContainer = () => {
  const musicContext = useContext(MusicContext);
  const {
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
  } = musicContext;

  useEffect(() => {
    console.log(user);
    console.log(listFavorite);
    user.iduser ? useGetLikes(user.iduser, setFavorites) : null;
    search
      ? useGetMusics(musics, setMusics, setListPlay, search)
      : useGetMusics(musics, setMusics, setListPlay);
  }, [search]);

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
            setPlay={setPlay}
            value={search}
            setMusicPlay={setMusicPlay}
            setMusics={setMusics}
            setListPlay={setListPlay}
            listFavorite={listFavorite}
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
