import { useContext } from "react";
import { FaSistrix as IconSearch } from "react-icons/fa";
import { FaRegTimesCircle as IconClose } from "react-icons/fa";
import { FaUserAlt as IconUser } from "react-icons/fa";
import { FaSignOutAlt as ExitIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MusicContext } from "../../context/MusicContext";

const Search = ({ setSearch, value, setValue, user }) => {
  const musicContext = useContext(MusicContext);
  const { addUser } = musicContext;
  return (
    <>
      <section className='container__search container__search-title'>
        <section className='content__search-title content__show'>
          <h1>Hello,</h1>
          <p>What do you want to hear today?</p>
        </section>
      </section>
      <section className='container__search'>
        <div className='container search'>
          <input
            className='search__input'
            type='text'
            placeholder='Search your music'
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (!e.target.value) setSearch("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(e.target.value);
                setValue("");
              }
            }}
          />
          {value && (
            <button
              className='button__icon'
              aria-label='button for search'
              onClick={(e) => {
                setSearch(e.target.value);
                setValue("");
              }}
            >
              <Link to='/'>
                <IconClose className='search__icon' />
              </Link>
            </button>
          )}
          <button
            // to={`/tracks?search=${value}`}
            className='button__icon'
            aria-label='button for search'
            onClick={() => setSearch(value)}
          >
            <IconSearch className='search__icon' />
          </button>
        </div>
        <section className='nav__title'>
          {user.name ? (
            <>
              <section className='content__hidden'>
                <Link to={`/profile/${user.iduser}`}>
                  <IconUser className='image__hidden' />
                  <span className='text__hidden'>{`${user.name.split(" ")[0]} ${
                    user.lastname.split(" ")[0]
                  }`}</span>
                </Link>
              </section>
              <button className='button__icon' onClick={(e) => addUser(e, {})}>
                <ExitIcon className='icon__exit' />
              </button>
            </>
          ) : (
            <section className='content__hidden'>
              <Link to='/register' className='text__hidden'>
                Regístrate
              </Link>
              <Link to='/login' className='text__hidden login__text'>
                Iniciar sesión
              </Link>
            </section>
          )}
        </section>
      </section>
    </>
  );
};
export default Search;
