export default function CartItem({product, quantity, takeOutFromCart}) {
  return (
    <div className="flex flex-col justify-between px-2 py-1 text-sm border rounded border-stone-500 shadow-sm text-stone-800 hover:scale-[1.01]"
      onClick={() => {takeOutFromCart(product.title)}}
    >
      <h4 className="text-base font-semibold">{product.title}</h4>
      <div className="flex justify-between">
        <div>{quantity}</div>
        <div className="text-green-700">Rp{product.price * quantity}</div>
      </div>
    </div>
  );
}
