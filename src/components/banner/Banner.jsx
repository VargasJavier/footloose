const Banner = ({ artist }) => {
  return (
    <>
      {artist ? (
        <section className='container container__artist'>
          <section className='container__image-artist'>
            <img
              className='artist__image'
              src={artist.picture_medium}
              alt={artist.name}
            />
          </section>
          <section className='artist__content'>
            <h2 className='artist__name'>{artist.name}</h2>
            <p className='artist__fans'>
              {`Lo mejor de ${artist.name}`}
              <span className='artist__span'>
                {" "}
                {` ${artist.nb_fan}seguidores`}
              </span>
            </p>
            <p className='artist__description'>
              Tiago Uriel Pacheco, más conocido por su nombre artístico Tiago
              PZK, es un rapero y cantante argentino, principalmente relacionado
              con el rap y el reggaeton.
            </p>
            <section className='artist__buttons'>
              <button className='artist__button'>Reproducir</button>
              <button className='artist__button artist__follow'>Seguir</button>
            </section>
          </section>
        </section>
      ) : null}
    </>
  );
};
export default Banner;
