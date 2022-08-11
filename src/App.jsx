import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import MusicItemContainer from "./components/containers/MusicItemContainer";
import MusicListContainer from "./components/containers/MusicListContainer";

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
