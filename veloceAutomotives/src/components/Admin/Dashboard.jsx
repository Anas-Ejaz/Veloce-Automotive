import SingleCard from "./Reuseable/SingleCard";

const carObj = {
  title: "Total Cars",
  totalNumber: 30,
  icon: "ri-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 50,
  icon: "ri-road-map-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-3-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-speed-line",
};

const Dashboard = () => {
  return (
    <div className="w-[100%] mt-[12vh] px-8">
      <div>
        
      <div className="grid grid-cols-4 gap-8">
        <SingleCard item={carObj} bg="bg-blue-500" />
        <SingleCard item={tripObj} bg="bg-purple-500" />
        <SingleCard item={clientObj} bg="bg-green-500" />
        <SingleCard item={distanceObj} bg="bg-orange-500" />
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-900 p-8 rounded-md h-80 text-white">
          <h3 className="text-lg mb-4">Miles Statistics</h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-md h-80 text-white">
          <h3 className="text-lg mb-4">Car Statistics</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="p-6 text-white rounded-md bg-[#18181B]">Car 1</div>
        <div className="p-6 text-white rounded-md bg-[#18181B]">Car 2</div>
        <div className="p-6 text-white rounded-md bg-[#18181B]">Car 3</div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;