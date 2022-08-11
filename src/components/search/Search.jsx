import { FaSistrix as IconSearch } from "react-icons/fa";
import { FaRegTimesCircle as IconClose } from "react-icons/fa";
import { FaUserAlt as IconUser } from "react-icons/fa";

const Search = ({ setSearch, value, setValue }) => {
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
              if (e.key === "Enter") setSearch(e.target.value);
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
              <IconClose className='search__icon' />
            </button>
          )}
          <button
            className='button__icon'
            aria-label='button for search'
            onClick={() => setSearch(value)}
          >
            <IconSearch className='search__icon' />
          </button>
        </div>
        <section className='content__hidden'>
          <IconUser className='image__hidden' />
          <span className='text__hidden'>Francisco M</span>
        </section>
      </section>
    </>
  );
};
export default Search;
