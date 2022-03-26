import Sidebar from "./components/Sidebar"
import Main from "./pages/Main";
import Cart from "./pages/Cart";

import ayamgoyeng from "./assets/ayam-goreng.jpg";
import ikanmasbumbukuning from "./assets/ikan-mas-bumbu-kuning.jpg";
import ikanpari from "./assets/ikan-pari.jpg";
import sateayam from "./assets/sate-ayam.jpg";
import gulaikambing from "./assets/gulai-kambing.jpg";

import {useState} from "react";

function App() {
  const [menu, _setMenu] = useState([
    {
      image: ayamgoyeng,
      title: "Ayam Goreng",
      price: 8000,
      rating: 4.5
    },
    {
      image: ikanmasbumbukuning,
      title: "Ikan Mas Bumbu Kuning",
      price: 12000,
      rating: 4.5
    },
    {
      image: ikanpari,
      title: "IKAN PARI ADALAH MAHKLUK HIDUP TIDAK UNTUK DIJUAL",
      price: 999999999,
      rating: 0
    },
    {
      image: sateayam,
      title: "Sate Ayam Pak Bambang",
      price: 10000,
      rating: 4.5
    },
    {
      image: gulaikambing,
      title: "Gulai Kambing",
      price: 18000,
      rating: 4.5
    },
  ]);

  const [isCartOpen, _setIsCartOpen] = useState(true);
  const [cart, setCart] = useState({});

  const addIntoCart = (productTitle, quantity) => {
    if (cart.hasOwnProperty(productTitle)) {
      return setCart({...cart, [productTitle]: cart[productTitle] + (quantity ?? 1)});
    }

    setCart({...cart, [productTitle]: quantity ?? 1});
  }

  const takeOutFromCart = (productTitle, quantity) => {
    quantity = quantity ?? 1;

    if (cart.hasOwnProperty(productTitle)) {
      if (cart[productTitle] - quantity > 0) {
        return setCart({...cart, [productTitle]: cart[productTitle] - quantity});
      }

      const newCart = {...cart};
      delete newCart[productTitle];

      setCart(newCart);
    }

    console.warn("Item doesn't exist in cart to be decremented");
  }

  const getPriceOfMenu = (productTitle) => {
    const index = menu.findIndex((item) => item.title === productTitle);

    if (index === -1) {
      console.warn("Product doesn't exist inside the menu for the price to be fetched");
      return -1;
    }

    return menu[index].price;
  }

  return (
    <div className="flex items-stretch min-h-screen bg-stone-100">
      <Sidebar menu={menu} cart={cart} />
      <div className="flex flex-wrap items-stretch min-h-screen grow">
        <Main menu={menu} cart={cart} addIntoCart={addIntoCart} />
        {isCartOpen ? <Cart cart={cart} getPriceOfMenu={getPriceOfMenu} takeOutFromCart={takeOutFromCart}/> : ""}
      </div>
    </div>
  )
}

export default App
