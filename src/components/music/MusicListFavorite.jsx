import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import MusicFavorite from "./MusicFavorite";

const MusicListFavorite = (setPlay, setMusicPlay) => {
  const musicContext = useContext(MusicContext);
  const { listFavorite } = musicContext;
  console.log(listFavorite);
  let styles = "container container__musics container__musics-full";

  return (
    <>
      <h2 className='container__music-title'>Favoritos</h2>
      <div className={styles}>
        <>
          {listFavorite.map((music, i) => (
            <MusicFavorite
              key={i}
              music={music}
              setPlay={setPlay}
              setMusicPlay={setMusicPlay}
              isLikeSave={
                listFavorite.length
                  ? listFavorite.some(
                      (musicLike) => musicLike.idmusic == music.id
                    )
                  : false
              }
            />
          ))}
        </>
      </div>
    </>
  );
};
export default MusicListFavorite;
