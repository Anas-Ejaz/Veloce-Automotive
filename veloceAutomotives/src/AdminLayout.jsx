import { Outlet } from "react-router";
import Sidebarpanel from "./components/Admin/Sidebarpanel";
import TopNav from "./components/Admin/TopNav";

export default function AdminLayout() {
  return (
    <div className="flex justify-between gap-8">
      <div className="w-[10%] lg:w-[20%]">
        <Sidebarpanel />
        <TopNav/>
      </div>

      <div className="w-[90%] lg:w-80%">
        <Outlet/>
      </div>
    </div>
  );
}