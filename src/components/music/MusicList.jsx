import BannerContainer from "../banner/BannerContainer";
import Music from "./Music";
import SkeletonList from "../skeleton/SkeletonList";

const MusicList = ({ musics, isPlay, setPlay, value }) => {
  let styles = value
    ? "container container__musics container__musics-full"
    : "container container__musics";
  return (
    <>
      {!value && <BannerContainer />}
      <h2 className='container__music-title'>Resultados</h2>
      <div className={styles}>
        {musics.length > 3 ? (
          musics.map((music, i) => (
            <Music key={i} music={music} isPlay={isPlay} setPlay={setPlay} />
          ))
        ) : (
          <SkeletonList />
        )}
      </div>
    </>
  );
};
export default MusicList;
