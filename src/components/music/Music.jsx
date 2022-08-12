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

const Music = ({ music, setPlay, setMusicPlay, isLikeSave = false }) => {
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
        {user.name ? (
          isLike ? (
            <button
              className='button__icon'
              onClick={(e) => {
                setIsLike(false);
                dropMusic(e, music.id);
                useGetLikes(user.iduser, setFavorites);
              }}
            >
              <LikeIcon className='music__go' />
            </button>
          ) : (
            <button
              className='button__icon'
              onClick={(e) => {
                setIsLike(true);
                addFavorites(user.iduser, music.id);
                addMusic(e, {
                  idmusic: music.id,
                  name: music.title,
                  albumname: music.album.title,
                  albumphoto: music.album.cover_medium,
                  preview: music.preview,
                  artist: music.artist.name,
                });
                useGetLikes(user.iduser, setFavorites);
              }}
            >
              <DislikeIcon className='music__go' />
            </button>
          )
        ) : (
          <button className='button__icon'></button>
        )}
      </section>
    </section>
  );
};
export default Music;
