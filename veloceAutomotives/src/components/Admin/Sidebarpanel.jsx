import { NavLink } from "react-router-dom";
import { RiDashboardLine, RiCarLine, RiUserLine, RiLogoutCircleRLine, } from "react-icons/ri";
import logo from "../../assets/veloce.png";

export default function Sidebarpanel() {
  return (
    <div className="fixed top-0 left-0 w-[20%] h-screen bg-blue-700 px-6 text-white">

      <div className="h-[70px] flex items-center">
        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold">
          <span className="w-12 h-auto flex items-center justify-center rounded-full">
            <img src={logo} className="w-[100%]" />
          </span>
            Veloce
        </h2>
      </div>

      <ul className="mt-8 flex flex-col gap-6 text-gray-300">
        
          <li>
            <NavLink
              to="/Admin/Dashboard" className={({ isActive }) => `flex items-center gap-2 px-2 py-1 rounded transition ${isActive ? "bg-white/10 text-white" : "hover:text-white"}`}>
              <RiDashboardLine />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Admin/Cars" className={({ isActive }) => `flex items-center gap-2 px-2 py-1 rounded transition ${isActive ? "bg-white/10 text-white" : "hover:text-white"}`}>
              <RiCarLine />
              Cars
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Admin/Bookings" className={({ isActive }) => `flex items-center gap-2 px-2 py-1 rounded transition ${isActive ? "bg-white/10 text-white" : "hover:text-white"}`}>
              <RiUserLine />
              Bookings
            </NavLink>
          </li>
      </ul>

      <NavLink to="/" className="absolute bottom-6 left-6 flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
        <RiLogoutCircleRLine />
        Logout
      </NavLink>
    </div>
  )
}
