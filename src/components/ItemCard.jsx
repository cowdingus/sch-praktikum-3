function getRatingStars(rating) {
  const wholeStars = Math.floor(rating);
  const hasHalfStar = (rating - wholeStars > 0.4 ? true : false);
  const emptyStars = 5 - wholeStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let x = 0; x < wholeStars; ++x) {
    stars.push(<i className="ri-star-fill" key={x}></i>);
  }
  if (hasHalfStar) stars.push(<i className="ri-star-half-line" key={wholeStars}></i>);
  for (let x = 0; x < emptyStars; ++x) {
    stars.push(<i className="ri-star-line" key={wholeStars + 1 + x}></i>);
  }

  return stars;
}

export default function ItemCard({ image, title, price, rating }) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md hover:scale-[1.01] transition-transform text-slate-800 w-54">
      <img src={image} alt="" className="rounded-lg max-h-48" />
      <div className="px-3 pt-3 pb-4">
        <h4 className="mb-2 text-lg font-semibold leading-tight">{title}</h4>
        <div className="flex justify-between">
          <div className="text-amber-400">{getRatingStars(rating)}</div>
          <div className="text-sm">Rp{price}</div>
        </div>
        <div className="flex mt-1">
          <div className="p-[0.3em] rounded text-[0.6em] leading-none font-semibold bg-red-300">NEW</div>
        </div>
      </div>
    </div>
  );
}
