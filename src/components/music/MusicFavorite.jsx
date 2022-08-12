import { BiPlay as PlayIcon } from "react-icons/bi";
import { isPlayOrPause } from "../../helpers/getMusics";
import { FaHeart as LikeIcon } from "react-icons/fa";
import { FaRegHeart as DislikeIcon } from "react-icons/fa";
import { useContext, useState } from "react";
import { MusicContext } from "../../context/MusicContext";
import {
  addFavorites,
  addMusic,
  dropMusic,
  useGetLikes,
} from "../../hooks/useGetLikes";

const MusicFavorite = ({
  music,
  setPlay,
  setMusicPlay,
  isLikeSave = false,
}) => {
  const [isLike, setIsLike] = useState(isLikeSave);
  const musicContext = useContext(MusicContext);
  const { user, setFavorites } = musicContext;

  return (
    <section className='music'>
      <div className='music__container-image'>
        <PlayIcon
          className='music__icon'
          onClick={(e) => {
            e.stopPropagation();
            isPlayOrPause(e, music);
            setPlay(true);
            setMusicPlay(music);
          }}
        />
        <picture>
          <source media='(max-width:720px)' srcSet={music.albumphoto} />
          <img
            className='music__image'
            src={music.albumphoto}
            alt='Song thumbnail'
          />
        </picture>
      </div>
      <h2 className='music__title'>{music.name}</h2>
      <section className='container container__go'>
        <p className='music__parraph'>{music.artist}</p>
        <button className='button__icon'></button>
      </section>
    </section>
  );
};
export default MusicFavorite;
