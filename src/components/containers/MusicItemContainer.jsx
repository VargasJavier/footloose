import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMusic } from "../../hooks/useGetMusics";
import MusicItem from "../music/MusicItem";

const MusicItemContainer = () => {
  const [item, setItem] = useState({});
  const [audio, setAudio] = useState("");
  let audioRef = useRef("");
  const [playing, setPlaying] = useState(false);
  const { musicId } = useParams();

  useEffect(() => {
    useGetMusic(musicId, setItem, setAudio);
    //audioRef = useRef(new Audio(audio));
  }, [musicId]);

  // useEffect(() => {
  //   playing ? audio.play() : audio.pause();
  // }, [playing]);

  return (
    <MusicItem
      item={item}
      audio={audio}
      playing={playing}
      setPlaying={setPlaying}
    />
  );
};
export default MusicItemContainer;
