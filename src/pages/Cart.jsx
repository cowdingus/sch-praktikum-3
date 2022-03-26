import CartItem from "../components/CartItem";

export default function Cart({cart}) {
  return (
    <div className="p-6 bg-white shadow grow">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      <section className="flex flex-col items-stretch">
        <CartItem product={{title: "Sate Ayam Pak Bambang", price: 8000}} quantity={5} />
      </section>
    </div>
  );
}
