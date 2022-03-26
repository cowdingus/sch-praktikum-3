import CartItem from "../components/CartItem";

export default function Cart({ cart, getPriceOfMenu, takeOutFromCart }) {
  return (
    <div className="w-64 p-6 bg-white shadow grow">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      <section className="flex flex-col items-stretch space-y-3">
        {Object.entries(cart).map(([title, quantity]) => (
          <CartItem
            product={{ title, price: getPriceOfMenu(title) }}
            quantity={quantity}
            takeOutFromCart={takeOutFromCart}
            key={title}
          />
        ))}
      </section>
      <section>
        <h3 className="mt-3 mb-1 text-xl font-bold underline underline-offset-2">Total</h3>
        <p className="font-semibold text-green-900">
        Rp{Object.entries(cart).reduce((accumulatedPrice, [productTitle, quantity]) => {
          const currentPrice = getPriceOfMenu(productTitle) * quantity;
          return accumulatedPrice + currentPrice;
        }, 0)}
        </p>
      </section>
    </div>
  );
}
