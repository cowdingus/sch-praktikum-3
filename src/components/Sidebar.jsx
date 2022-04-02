import {Link} from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <div className="z-10 w-screen h-16 md:w-16 md:h-screen shrink-0">
      <div className="fixed flex items-center justify-center w-screen h-16 py-3 text-2xl bg-white border-r shadow md:justify-start md:flex-col gap-6 md:w-16 md:h-screen border-stone-50 md:space-y-3 leading-3">
        <img src={logo} className="h-[40px]" />
        <Link to="/event" className="order-first group md:order-none">
          <i class="ri-file-list-3-line group-hover:bg-gray-200 rounded-sm p-2"></i>
        </Link>
        <Link to="/shop" className="group">
          <i class="ri-shopping-basket-line group-hover:bg-gray-200 rounded-sm p-2"></i>
        </Link>
      </div>
    </div>
  );
}
