import foxbel_music from "../../assets/images/foxbel_music.png";
import foxbel_music2x from "../../assets/images/foxbel_music2x.png";
import foxbel_music3x from "../../assets/images/foxbel_music3x.png";

const HeaderBar = () => {
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
            <li className='bar__li'>Mi librería</li>
            <li className='bar__li bar__selected'>Recientes</li>
            <li className='bar__li'>Artistas</li>
            <li className='bar__li'>Álbums</li>
            <li className='bar__li'>Canciones</li>
          </ul>
          <ul className='bar__list'>
            <li className='bar__li'>Playlist</li>
            <li className='bar__li'>Metal</li>
            <li className='bar__li'>Para bailar</li>
            <li className='bar__li'>Rock 90s</li>
            <li className='bar__li'>Baladas</li>
          </ul>
        </nav>
      </header>
    </section>
  );
};
export default HeaderBar;
