import { useContext } from "react";
import HeaderBar from "../header/HeaderBar";
import Footer from "../footer/Footer";
import { MusicContext } from "../../context/MusicContext";
import MusicListFavorite from "../music/MusicListFavorite";

const MusicFavoritesContainer = () => {
  const musicContext = useContext(MusicContext);
  const {
    listFavorite,
    setMusics,
    search,
    isPlay,
    setPlay,
    musicPlay,
    setMusicPlay,
    listPlay,
    setListPlay,
  } = musicContext;
  console.log(listFavorite);

  return (
    <>
      <section className='container__bar'>
        <HeaderBar />
        <section>
          <MusicListFavorite setPlay={setPlay} setMusicPlay={setMusicPlay} />
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
export default MusicFavoritesContainer;
