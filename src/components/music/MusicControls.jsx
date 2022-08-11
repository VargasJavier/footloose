import { FaRegHeart as LikeIcon } from "react-icons/fa";
import { FaHeart as LikeCompleteIcon } from "react-icons/fa";
import { IoRepeatOutline as RepeatIcon } from "react-icons/io5";
import { BiPlay as PlayIcon } from "react-icons/bi";
import { IoMdPause as PauseIcon } from "react-icons/io";
const MusicControls = ({
  isLike,
  isPlay,
  setIsPlay,
  setIsLike,
  playing,
  setPlaying,
  isRepeat,
  setIsRepeat,
}) => {
  return (
    <section className='wrapper__controls wrapper__flex'>
      <button onClick={() => setIsLike(!isLike)}>
        {isLike ? (
          <LikeCompleteIcon className='wrapper__like wrapper_icon' />
        ) : (
          <LikeIcon className='wrapper__like wrapper_icon' />
        )}
      </button>
      <button
        className='wrapper__container-icon'
        onClick={() => {
          setIsPlay(!isPlay);
          setPlaying(!playing);
        }}
      >
        {isPlay ? (
          <PlayIcon className='wrapper__play-pause wrapper_icon' />
        ) : (
          <PauseIcon className='wrapper__play-pause wrapper_icon' />
        )}
      </button>
      <button onClick={() => setIsRepeat(!isRepeat)}>
        {isRepeat ? (
          <RepeatIcon className='wrapper__repeat wrapper_icon wrapper__repeat--selected' />
        ) : (
          <RepeatIcon className='wrapper__repeat wrapper_icon' />
        )}
      </button>
    </section>
  );
};
export default MusicControls;
