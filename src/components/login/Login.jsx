import { useState } from "react";
import { useContext, useEffect } from "react";
import { BsFillMusicPlayerFill as MusicIcon } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import { MusicContext } from "../../context/MusicContext";
import { useLogin } from "../../hooks/useGetUsers";

const Login = () => {
  const musicContext = useContext(MusicContext);
  const { addUser } = musicContext;
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className='container__login'>
        <section className='content'>
          <header className='header'>
            <MusicIcon className='icon plane' />
            <span className='header__title'>
              Music<span className='header__title--decoration'>React</span>
            </span>
          </header>
          <main className='container__main'>
            <form>
              <legend>
                <h1 className='title'>Inicia sesión</h1>
                <p className='parraph'>
                  Si ya eres socio, ingresa tus datos de siempre.
                </p>
              </legend>
              <section className='container__input'>
                <div>
                  <input
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Email o número de socio'
                    value={userValue.email}
                    onChange={(e) =>
                      setUserValue({ ...userValue, email: e.target.value })
                    }
                  />
                </div>
                {/* <span className='text__error'>
                  El email o número de socio que ingresaste es incorrecto
                </span> */}
              </section>
              <section className='container__input'>
                <input
                  className='input'
                  type='text'
                  autoComplete='off'
                  placeholder='Contraseña'
                  value={userValue.password}
                  onChange={(e) =>
                    setUserValue({ ...userValue, password: e.target.value })
                  }
                />
              </section>
              <p className='ancla'>Recupera el acceso a tu cuenta</p>
              <button
                className='button button__login'
                onClick={(e) => {
                  useLogin(e, userValue, navigate, setError, addUser);
                }}
              >
                Iniciar sesión
              </button>
              {error && (
                <span className='text__error'>
                  El email o contraseña es incorrecto o no existe.
                </span>
              )}
            </form>
            <footer>
              <p className='footer__parraph'>
                <Link to='/register'>
                  ¿No estás registrado?{" "}
                  <span className='ancla footer__register'>
                    Crea una cuenta
                  </span>
                </Link>
              </p>
            </footer>
          </main>
        </section>
      </section>
    </>
  );
};

export default Login;
