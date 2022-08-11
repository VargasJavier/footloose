import { useEffect, useState } from "react";
import { useGetArtist } from "../../hooks/useGetArtist";
import Banner from "./Banner";

const BannerContainer = () => {
  const [artist, setArtist] = useState({});

  useEffect(() => {
    useGetArtist(setArtist);
  });

  return <Banner artist={artist} />;
};
export default BannerContainer;
