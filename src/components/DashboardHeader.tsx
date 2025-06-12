export default function DashboardHeader() {
    return (
        <div className="flex items-center justify-between w-full px-1 py-1">
            {/* Left: Greeting */}
            <div>
                <h1 className="text-[20px] font-semibold ">Morning Hasika!</h1>
                <h3 className="text-sm text-gray-500">
                    Here’s what’s happening with you Front Desk today.
                </h3>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center space-x-3">
                {[
                    {
                        icon: 'calendar_month',
                        label: 'Last Year',
                    },
                    {
                        icon: 'download',
                        label: 'Export',
                        extraClasses: 'bg-secondary text-white hover:bg-secondary',
                    },
                ].map(({ icon, label, extraClasses = '' }, index) => (
                    <button
                        key={index}
                        className={`flex items-center justify-center gap-1 border px-3.5 py-2.5  text-sm transition ${extraClasses} ${
                            !extraClasses && 'bg-white hover:bg-gray-100'
                        }`}
                    >
                        <span className="material-symbols-outlined text-[18px]">{icon}</span>
                        {label}
                        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
