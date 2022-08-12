import BannerContainer from "../banner/BannerContainer";
import Music from "./Music";
import SkeletonList from "../skeleton/SkeletonList";
import { Link } from "react-router-dom";
import { useGetMusics } from "../../hooks/useGetMusics";

const MusicList = ({
  musics,
  isPlay,
  setPlay,
  value,
  setMusicPlay,
  setMusics,
  setListPlay,
}) => {
  let styles = value
    ? "container container__musics container__musics-full"
    : "container container__musics";
  return (
    <>
      {!value && <BannerContainer />}
      <h2 className='container__music-title'>Resultados</h2>
      {value && musics.length == 10 && (
        <p className='title__parraph'>
          Se mostraron 10 resultados{" "}
          <button
            onClick={() => {
              setMusics([]);
              useGetMusics(musics, setMusics, setListPlay, value, 20);
            }}
          >
            <Link to={`/tracks?search=${value}`} className='link__more'>
              Ver más
            </Link>
          </button>
        </p>
      )}
      <div className={styles}>
        {musics.length > 3 ? (
          musics.map((music, i) => (
            <Music
              key={i}
              music={music}
              isPlay={isPlay}
              setPlay={setPlay}
              setMusicPlay={setMusicPlay}
            />
          ))
        ) : (
          <SkeletonList />
        )}
        <div></div>
        <div></div>
        <div className='space'></div>
      </div>
    </>
  );
};
export default MusicList;
