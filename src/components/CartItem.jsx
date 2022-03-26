export default function CartItem({product, quantity}) {
  return (
    <div className="flex flex-col justify-between h-20 px-2 py-1 text-sm border rounded border-stone-500 shadow-sm text-stone-800">
      <h4 className="text-base font-semibold">{product.title}</h4>
      <div className="flex justify-between">
        <div>{quantity}</div>
        <div className="text-green-700">{product.price}</div>
      </div>
    </div>
  );
}
