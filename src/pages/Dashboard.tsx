import DashboardHeader from "../components/DashboardHeader.tsx";
import StateCard from "../components/StateCard.tsx";
import InventoryOverviewStatistic from "../components/InventoryOverviewStatistic.tsx";
import PatientsOverview from "../components/PatientsOverview.tsx";
import ExpireMedicineChart from "../components/ExpireMedicineChart.tsx";

const Dashboard = () => {
    return (
        <div className="flex flex-col space-y-2">
            {/* Header */}
            <DashboardHeader title={"Morning Hasika!"} description={"Here’s what’s happening with you store today."} />

            {/* Row 1: Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-1">
                <StateCard icon="pill" label="Inventory Status" value={5000} percentage="16%" />
                <StateCard icon="prescriptions" label="Prescriptions" value={1200} percentage="-8%" />
                <StateCard icon="medication" label="Medicine Available" value={3800} percentage="22%" />
                <StateCard icon="timer_off" label="Expire Medicine" value={40} percentage="-4%" />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 p-1 h-full">
                <div className="flex-1 lg:basis-3/4 border rounded-sm">
                    <InventoryOverviewStatistic />
                </div>

                <div className="border flex-1 lg:basis-1/4 overflow-y-auto">
                    <ExpireMedicineChart />
                </div>
            </div>

            <div className="p-1 mt-[-20px]">
                <PatientsOverview/>
            </div>
        </div>
    );
};

export default Dashboard;
