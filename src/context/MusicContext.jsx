import { createContext, useState } from "react";

export const MusicContext = createContext([]);

const MusicProvider = (props) => {
  const [listFavorite, setFavorite] = useState([]);

  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [isPlay, setPlay] = useState(false);
  const [musicPlay, setMusicPlay] = useState({});
  const [listPlay, setListPlay] = useState([]);
  const [user, setUser] = useState({});
  const [id, setID] = useState(1);
  // const [user, setUser] = useState({
  //   name: "Javier Alejandro",
  //   lastName: "Vargas Mexico",
  // });

  const addUser = (user) => {
    setUser(user);
  };

  const addID = () => {
    setID(id + 1);
  };

  // Métodos recomendados para el carrito
  // const addItem = (item, qty) => {
  //   //Agregar cierta cantidad de un item al carrito
  //   if (isInCart(item.id)) {
  //     let index = cart.findIndex((e) => e.id === item.id);
  //     let product = cart[index];
  //     product.qty = product.qty + qty;
  //     const newCart = [...cart];
  //     newCart.splice(index, 1, product);
  //     setCart([...newCart]);
  //   } else {
  //     let product = { ...item, qty };
  //     setCart([...cart, product]);
  //   }
  // };

  // const removeItem = (itemId) => {
  //   //Remover un item del cart por usando su id
  //   let newCart = [...cart];
  //   newCart = newCart.filter((item) => item.id !== itemId);
  //   setCart([...newCart]);
  // };

  // const clear = () => {
  //   // Remover todos los favoritos
  //   console.log("HOLA");
  //   setCart([]);
  // };

  // const isInCart = (id) => {
  //   // Saber si el item ya está en el carrito
  //   return cart.some((e) => e.id === id);
  // };

  // const addCheckout = (docData) => {
  //   setCheckout(docData);
  // };

  return (
    <>
      <MusicContext.Provider
        value={{
          listFavorite,
          setFavorite,
          musics,
          setMusics,
          search,
          setSearch,
          value,
          setValue,
          isPlay,
          setPlay,
          musicPlay,
          setMusicPlay,
          listPlay,
          setListPlay,
          user,
          setUser,
          addID,
          id,
          addUser: addUser,
          // addToCart: addItem,
          // removeItem: removeItem,
          // totalProducts: totalProducts,
          // totalPrice: totalPrice,
          // addCheckout: addCheckout,
        }}
      >
        {props.children}
      </MusicContext.Provider>
    </>
  );
};
export default MusicProvider;
