import DashboardHeader from "../components/DashboardHeader.tsx";
import StateCard from "../components/StateCard.tsx";
import InventoryOverview from "../components/inventory/InventoryOverview.tsx";

const ManageInventory = () => {
  return (
      <div className="flex flex-col space-y-2">
          <DashboardHeader title={"Manage Inventory"}
                           description={"Here’s what’s happening with you Inventory's  today."}/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-1">
              <StateCard icon="pill" label="Inventory Status" value={5000} percentage="16%"/>
              <StateCard icon="local_hospital" label="Total Brands" value={1200} percentage="-8%"/>
              <StateCard icon="medication" label="Medicine Available" value={3800} percentage="22%"/>
              <StateCard icon="timer_off" label="Expire Medicine" value={40} percentage="-4%"/>
          </div>

          <div className="p-1 mt-[-20px]">
              <InventoryOverview/>
          </div>
      </div>
  );
};

export default ManageInventory;
