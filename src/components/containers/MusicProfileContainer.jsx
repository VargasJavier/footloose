import { useContext } from "react";
import HeaderBar from "../header/HeaderBar";
import { MusicContext } from "../../context/MusicContext";

const MusicProfileContainer = () => {
  const musicContext = useContext(MusicContext);
  const { user } = musicContext;

  return (
    <>
      <section className='container__bar'>
        <HeaderBar />
        <section>
          <h2>Profile</h2>
          {user ? (
            <>
              <div>
                <p>{`Nombres: ${user.name}`}</p>
              </div>
              <div>
                <p>{`Apellidos: ${user.lastname}`}</p>
              </div>
              <div>
                <p>{`Phone: ${user.phone}`}</p>
              </div>
              <div>
                <p>{`email: ${user.email}`}</p>
              </div>
            </>
          ) : (
            <p>No se encontraron resultados </p>
          )}
        </section>
      </section>
    </>
  );
};
export default MusicProfileContainer;
