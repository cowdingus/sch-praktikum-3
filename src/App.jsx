import {Outlet} from "react-router-dom";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col items-stretch min-h-screen md:flex-row bg-stone-100">
      <Sidebar />
      <div className="flex flex-wrap items-stretch grow">
        <Outlet />
      </div>
    </div>
  )
}

export default App
