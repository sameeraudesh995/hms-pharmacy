import avatar from '../../public/assets/avatar.jpg';

const Navbar = () => {
    return (
        <div className="px-2 py-1">
            {/* Top Row: Dashboard text + Icons */}
            <div className="flex justify-between items-center">
                {/* Left: Dashboard text */}
                <p className="text-[12px] text-gray-500 text-nowrap">
                    Pages / <span className="text-[12px] text-gray-500 text-nowrap">Dashboard</span>
                </p>

                {/* Right: Icons */}
                <div className="flex items-center space-x-3">
                    <div
                        className="flex items-center space-x-1 cursor-pointer  p-1 rounded-md transition duration-200">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-9 h-9 rounded-full hover:opacity-80 transition duration-200"
                        />
                        <div className="text-xs leading-tight">
                            <p className="font-semibold text-[12px]">Hanska Rathnayaka</p>
                            <p className="text-gray-500 text-[12px]">hanska@gmail.com</p>
                        </div>
                    </div>


                    <div className="relative cursor-pointer">
                        <span className="material-symbols-outlined text-black-700 text-[20px]">notifications</span>
                        <span
                            className="absolute -top-0.6 -right-2 bg-primary text-white text-[7px] rounded-full px-1">13</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
