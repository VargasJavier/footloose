import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import MusicItemContainer from "./Components/containers/MusicItemContainer";
import MusicListContainer from "./Components/Containers/MusicListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MusicListContainer />} />
          <Route path='music/:musicId' element={<MusicItemContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
