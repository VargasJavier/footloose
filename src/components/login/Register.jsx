import { useContext, useEffect, useState } from "react";
import { BsFillMusicPlayerFill as MusicIcon } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import { MusicContext } from "../../context/MusicContext";
import { useGetUsers } from "../../hooks/useGetUsers";

const Register = () => {
  const userExample = {
    iduser: "",
    name: "",
    lastname: "",
    phone: "",
    genrer: "",
    email: "",
    password: "",
  };
  const musicContext = useContext(MusicContext);
  const { addUser, addID, id } = musicContext;
  const [users, setUsers] = useState([]);
  const [userValue, setUserValue] = useState(userExample);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userValue);
    const userFind = users.find((user) => user.email === userValue.email);
    if (userFind) {
      setError(true);
      return;
    }
    const requestInit = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...userValue, iduser: id }),
    };
    fetch("http://localhost:9000/api", requestInit);
    addUser(userValue);
    addID();
    navigate("/");
  };

  useEffect(() => {
    useGetUsers(setUsers);
  }, []);

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
            <form action=''>
              <legend>
                <h1 className='title'>Regístrate</h1>
                <p className='parraph'>
                  Si ya tienes una cuenta, dale en 'Tengo una cuenta' en la
                  parte inferior.
                </p>
              </legend>
              <section className='container__input'>
                <div>
                  <input
                    name='name'
                    onChange={handleChange}
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Nombre'
                  />
                </div>
              </section>
              <section className='container__input'>
                <div>
                  <input
                    name='lastname'
                    onChange={handleChange}
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Apellido'
                  />
                </div>
              </section>
              <section className='container__input'>
                <div>
                  <input
                    name='phone'
                    onChange={handleChange}
                    className='input'
                    type='number'
                    autoComplete='off'
                    placeholder='Número de celular'
                  />
                </div>
              </section>
              {/* GENERO */}
              <section className='container__input'>
                <div>
                  <input
                    type='radio'
                    id='none'
                    value='0'
                    name='genrer'
                    onChange={handleChange}
                  />
                  <label htmlFor='none'>Deseo no responder</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='masculino'
                    value='1'
                    name='genrer'
                    onChange={handleChange}
                  />
                  <label htmlFor='css'>Masculino</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='femenino'
                    value='2'
                    name='genrer'
                    onChange={handleChange}
                  />
                  <label htmlFor='femenino'>Femenino</label>
                </div>
              </section>
              <section className='container__input'>
                <div>
                  <input
                    name='email'
                    onChange={handleChange}
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Email o número de socio'
                  />
                </div>
              </section>
              <section className='container__input'>
                <input
                  name='password'
                  onChange={handleChange}
                  className='input'
                  type='text'
                  autoComplete='off'
                  placeholder='Contraseña'
                />
              </section>
              <button
                type='submit'
                className='button button__login'
                onClick={handleSubmit}
              >
                Registrar
              </button>
              {error && (
                <span className='text__error'>
                  Ya tiene una cuenta con ese email.
                </span>
              )}
            </form>
            <footer>
              <p className='footer__parraph'>
                <Link to='/login'>
                  ¿Ya tienes una cuenta?{" "}
                  <span className='ancla footer__register'>Ingresa aquí</span>
                </Link>
              </p>
            </footer>
          </main>
        </section>
      </section>
    </>
  );
};
export default Register;
