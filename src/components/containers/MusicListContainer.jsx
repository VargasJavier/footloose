import { useEffect, useState } from "react";
import { useGetMusics } from "../../hooks/useGetMusics";
import MusicList from "../music/MusicList";
import Search from "../search/Search";
import HeaderBar from "../header/HeaderBar";

const MusicListContainer = () => {
  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    search
      ? useGetMusics(musics, setMusics, search)
      : useGetMusics(musics, setMusics);
  }, [search]);

  useEffect(() => {}, [isPlay]);

  return (
    <>
      <section className='container__bar'>
        <HeaderBar />
        <section>
          <Search setSearch={setSearch} value={value} setValue={setValue} />
          <MusicList
            musics={musics}
            isPlay={isPlay}
            setPlay={setPlay}
            value={search}
          />
        </section>
      </section>
    </>
  );
};

export default MusicListContainer;
