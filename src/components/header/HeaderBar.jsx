import { useContext } from "react";
import { Link } from "react-router-dom";
import foxbel_music from "../../assets/images/foxbel_music.png";
import foxbel_music2x from "../../assets/images/foxbel_music2x.png";
import foxbel_music3x from "../../assets/images/foxbel_music3x.png";
import { MusicContext } from "../../context/MusicContext";

const HeaderBar = () => {
  const musicContext = useContext(MusicContext);
  const { user } = musicContext;
  return (
    <section className='content__bar'>
      <header>
        <picture>
          <source
            className='bar__image'
            media='(max-width:1080px)'
            srcSet={foxbel_music}
          />
          <source
            className='bar__image'
            media='(max-width:1800)'
            srcSet={foxbel_music2x}
          />
          <img
            className='bar__image'
            src={foxbel_music3x}
            alt='Song thumbnail'
          />
        </picture>
        <nav>
          <ul className='bar__list'>
            <li className='bar__li'>Playlist</li>
            <li className='bar__li bar__selected'>
              <Link to='/'>Recientes</Link>
            </li>
            <li className='bar__li'>Artistas</li>
            <li className='bar__li'>Álbums</li>
            <li className='bar__li'>Canciones</li>
          </ul>
          {user.name && (
            <ul className='bar__list'>
              <li className='bar__li'>My Librería</li>
              <li className='bar__li'>
                <Link to='/favorites'>Favoritos</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </section>
  );
};
export default HeaderBar;
