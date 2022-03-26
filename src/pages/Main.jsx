import ItemCard from "../components/ItemCard";

import Masonry from "react-masonry-css";
// import ayamgoyeng from "../assets/ayam-goreng.jpg";

export default function Main({menu}) {
  return (
    <main className="p-8 grow-0 w-min">
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1
        }}
        className="flex gap-5"
        columnClassName=""
      >
        {menu.map(item => <div className="mb-5 last:mb-0"><ItemCard {...item} /></div>)}
      </Masonry>
    </main>
  );
}
