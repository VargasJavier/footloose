import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import MusicItemContainer from "./components/containers/MusicItemContainer";
import MusicListContainer from "./components/containers/MusicListContainer";
import MusicSearchContainer from "./components/containers/MusicSearchContainer";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import MusicProvider from "./context/MusicContext";

function App() {
  return (
    <>
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MusicListContainer />} />
            <Route path='/tracks' element={<MusicSearchContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='music/:musicId' element={<MusicItemContainer />} />
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </>
  );
}

export default App;
