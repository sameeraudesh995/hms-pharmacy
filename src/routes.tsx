import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontdeskDashboard from "./layout/FrontdeskDashboard.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Settings from "./pages/Settings.tsx";
import ManageInventory from "./pages/ManageInventory.tsx";
import ManagePrescriptions from "./pages/ManagePrescriptions.tsx";
import DrugsIssue from "./pages/DrugsIssue.tsx";
import ManageSuppliers from "./pages/ManageSuppliers.tsx";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Main layout route */}
                <Route path="/" element={<FrontdeskDashboard/>}>
                    {/* Child pages that will render inside <Outlet /> */}
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="ManageInventory" element={<ManageInventory/>} />
                    <Route path="ManagePrescriptions" element={<ManagePrescriptions/>} />
                    <Route path="DrugsIssue" element={<DrugsIssue/>} />
                    <Route path="ManageSuppliers" element={<ManageSuppliers/>} />
                    <Route path="settings" element={<Settings/>} />
                </Route>
            </Routes>
        </Router>
    );
}
