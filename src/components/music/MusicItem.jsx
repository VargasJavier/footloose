import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill as BackIcon } from "react-icons/bs";
import { FaVolumeUp as VolumenIcon } from "react-icons/fa";
import HeaderBar from "../header/HeaderBar";
import MusicControls from "./MusicControls";

const MusicItem = ({ item, audio, playing, setPlaying }) => {
  const [isPlay, setIsPlay] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const { title, preview } = item;

  const intervalRef = useRef();
  const isReady = useRef(false);
  const audioRef = useRef(new Audio(preview ? preview : audio));
  console.log(audioRef.current);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      // if (audioRef.current.ended) {
      //   toNextTrack();
      // } else {
      setTrackProgress(audioRef.current.currentTime);
      // }
    }, [1000]);
  };

  useEffect(() => {
    let pausePromise = audioRef.current.pause();

    if (!pausePromise) {
      audioRef.current = new Audio(preview);
      setTrackProgress(audioRef.current.currentTime);
      if (isReady.current) {
        audioRef.current.play();
        setPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }
  }, [trackProgress]);

  return (
    <>
      {item.album ? (
        <>
          <section className='container__bar'>
            <HeaderBar />
            <section>
              <section className='wrapper'>
                <section className='wrapper__top wrapper__flex'>
                  <Link to='/'>
                    <BackIcon className='icon' />
                  </Link>
                  <span className='wrapper_msg'>Now playing</span>
                  <span></span>
                </section>
                <section className='wrapper__images'>
                  <picture>
                    <source
                      className='wrapper__image'
                      media='(max-width:720px)'
                      srcSet={item.album.cover_medium}
                    />
                    <source
                      className='wrapper__image'
                      media='(max-width:12000px)'
                      srcSet={item.album.cover_big}
                    />
                    <img className='wrapper__image' src={item.album.cover_xl} />
                  </picture>
                </section>
                <section className='wrapper__details'>
                  <h2 className='wrapper__title'>{title}</h2>
                  <p className='wrapper__name'>{item.artist.name}</p>
                </section>
                <section className='wrapper__progress'>
                  <section className='wrapper__bar'>
                    <span className='wrapper__bar-span'></span>
                  </section>
                  <section className='wrapper__timer wrapper__flex'>
                    <span className='wrapper__current'>0:00</span>
                    <span className='wrapper__current'>0:30</span>
                  </section>
                </section>
                <MusicControls
                  isPlay={isPlay}
                  isLike={isLike}
                  setIsPlay={setIsPlay}
                  setIsLike={setIsLike}
                  playing={playing}
                  setPlaying={setPlaying}
                  isRepeat={isRepeat}
                  setIsRepeat={setIsRepeat}
                />
                <section className='container'>
                  <VolumenIcon className='wrapper__icon' />
                  <input
                    className='wrapper__volumen'
                    type='range'
                    max='100'
                    min='0'
                    step='1'
                    value='100'
                  />
                </section>
              </section>
            </section>
          </section>
        </>
      ) : (
        <>
          <p>Cargando...</p>
        </>
      )}
    </>
  );
};
export default MusicItem;
