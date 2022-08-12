import { BiPlay as PlayIcon } from "react-icons/bi";
import { isPlayOrPause } from "../../helpers/getMusics";
import { FaHeart as LikeIcon } from "react-icons/fa";
import { FaRegHeart as DislikeIcon } from "react-icons/fa";

const Music = ({ music, isPlay, setPlay, setMusicPlay }) => {
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
          <source media='(max-width:720px)' srcSet={music.album.cover_medium} />
          <img
            className='music__image'
            src={music.album.cover_big}
            alt='Song thumbnail'
          />
        </picture>
      </div>
      <h2 className='music__title'>{music.title}</h2>
      <section className='container container__go'>
        <p className='music__parraph'>{music.artist.name}</p>

        <button className='button__icon'>
          <DislikeIcon className='music__go' />
        </button>
        {/* <button className='button__icon'>
          <LikeIcon className='music__go' />
        </button> */}
      </section>
    </section>
  );
};
export default Music;
