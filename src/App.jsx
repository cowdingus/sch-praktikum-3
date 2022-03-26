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
  const [menu, setMenu] = useState([
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

  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cart, setCart] = useState([]);

  const addIntoCart = (productTitle, quantity) => {
    setCart([...cart, {title: productTitle, quantity}]);
  }

  const decrementInCart = (productTitle) => {
    setCart();
  }

  return (
    <div className="flex items-stretch min-h-screen bg-stone-100">
      <Sidebar cart={cart} />
      <Main menu={menu} cart={cart} />
      {isCartOpen ? <Cart /> : ""}
    </div>
  )
}

export default App
