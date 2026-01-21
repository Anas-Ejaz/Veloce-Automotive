import { Routes, Route} from "react-router-dom";
import Sidebarpanel from "./Sidebarpanel";
import TopNav from "./TopNav";
import Dashboard from "./Dashboard";
import Cars from "../InventoryPage/Garage"

function AdminPage() {
  return (
    <div className="h-screen w-full flex justify-between">
      <div className="w-[20%]">
        <Sidebarpanel />
        <TopNav />
      </div>

      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cars" element={<Cars />} />
          {/* <Route path="/bookings" element={<Bookings />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
      
    </div>
  )
}

export default AdminPage
