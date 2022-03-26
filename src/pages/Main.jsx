import ItemCard from "../components/ItemCard";

import Masonry from "react-masonry-css";

export default function Main({menu, addIntoCart}) {
  return (
    <Masonry
      breakpointCols={{
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      }}
      className="flex p-8 gap-5 grow w-min"
      columnClassName=""
    >
      {menu.map(item => <div className="mb-5 last:mb-0" onClick={() => {addIntoCart(item.title, 1)}}><ItemCard {...item} /></div>)}
    </Masonry>
  );
}
