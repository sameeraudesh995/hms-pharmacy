import {NavLink} from 'react-router-dom';
import logo from '../../public/assets/logo.png';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div
            className="top-0 left-0 flex flex-col items-center h-screen bg-secondary text-white w-[40px] py-4 overflow-hidden">
            {/* Logo */}
            <div className="flex items-center justify-center h-12 mb-3 mt-[-15px]">
                <Link to="/dashboard"
                      className="focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 focus:rounded-[2px]">
                    <img src={logo} alt="Logo" className="w-6 h-6 cursor-pointer hover:opacity-80"/>
                </Link>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 text-lg">

                <NavLink
                    to="/dashboard"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500  p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px] ">dashboard</span>
                </NavLink>
                <NavLink
                    to="/ManageInventory"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500  p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px] ">pill</span>
                </NavLink>
                <NavLink
                    to="/ManagePrescriptions"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500  p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px] ">prescriptions</span>
                </NavLink>
                <NavLink
                    to="/DrugsIssue"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500  p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px] ">medical_services</span>
                </NavLink>
                <NavLink
                    to="/ManageSuppliers"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500  p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px] ">delivery_truck_bolt</span>
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({isActive}) =>
                        isActive
                            ? "bg-gray-500 p-1 rounded-sm w-full h-full flex justify-center items-center"
                            : "p-1 w-full h-6 rounded-sm flex justify-center items-center transition-all duration-300 "
                    }>
                    <span className="material-symbols-outlined text-[20px]">manufacturing</span>
                </NavLink>

            </div>
        </div>
    );
};

export default Sidebar;
