import logo from "../assets/logo.svg";

export default function Sidebar({ openAddForm }) {
  return (
    <div className="w-16 h-screen">
      <div className="fixed flex flex-col items-center w-16 h-screen py-3 bg-white border-r shadow border-stone-50 space-y-3">
        <img src={logo} className="h-[40px]" />
      </div>
    </div>
  );
}
