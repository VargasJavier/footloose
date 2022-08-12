import { BiPlay as PlayIcon } from "react-icons/bi";
import { IoMdPause as PauseIcon } from "react-icons/io";
import { FaVolumeUp as VolumenIcon } from "react-icons/fa";
import { BsSkipStartFill as PrevIcon } from "react-icons/bs";
import { BsSkipEndFill as NextIcon } from "react-icons/bs";
import { getNextMusic, getPrevMusic } from "../../hooks/useGetMusics";
import { isPlayOrPause } from "../../helpers/getMusics";

const Footer = ({ musicPlay, listPlay, setMusicPlay, isPlay, setPlay }) => {
  return (
    <>
      {musicPlay.album ? (
        <footer className='footer'>
          <section className='footer__section'>
            <img src={musicPlay.album.cover} alt='miniatura' />
            <section className='footer__section-title'>
              <h4 className='footer__title'>{musicPlay.title}</h4>
              <p className='footer__title'>{`${musicPlay.artist.name} - ${musicPlay.album.title}`}</p>
            </section>
          </section>
          <section className='section__buttons'>
            <button
              className='footer__icon'
              onClick={() => getPrevMusic(musicPlay, listPlay, setMusicPlay)}
            >
              <PrevIcon className='icon__footer' />
            </button>
            <>
              {isPlay ? (
                <>
                  <button
                    className='footer__icon'
                    onClick={(e) => {
                      e.stopPropagation();
                      isPlayOrPause(e, musicPlay);
                      setPlay(false);
                    }}
                  >
                    <PauseIcon className='icon__footer' />
                  </button>
                  <audio
                    src={musicPlay.preview}
                    className='hidden'
                    autoPlay
                  ></audio>
                </>
              ) : (
                <button
                  className='footer__icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    isPlayOrPause(e, musicPlay);
                    setPlay(true);
                    setMusicPlay(musicPlay);
                  }}
                >
                  <PlayIcon className='icon__footer' />
                </button>
              )}
            </>
            <button
              className='footer__icon'
              onClick={() => getNextMusic(musicPlay, listPlay, setMusicPlay)}
            >
              <NextIcon className='icon__footer' />
            </button>
          </section>
          <section className='section__buttons volumen__section'>
            <input type='range' name='volumen' />
            <VolumenIcon className='icon__footer' />
          </section>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};
export default Footer;
