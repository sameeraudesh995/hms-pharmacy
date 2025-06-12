import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.tsx';
import Navbar from '../components/Navbar.tsx';


const FrontdeskDashboard: React.FC = () => {
    return (
        <div className="dashboard-layout" style={{display: 'flex', height: '100vh'}}>
            {/* Sidebar Section */}
            <Sidebar/>

            <div className="main-content flex flex-col w-full" style={{flex: 1, overflowY: 'auto'}}>
                {/* Navbar */}
                <div className="border-gray-200 bg-white z-10 sticky pr-2.5">
                    <Navbar/>
                </div>

                <div className="p-1">
                    <Outlet/>
                </div>
            </div>
            </div>
            );
            };
export default FrontdeskDashboard;
