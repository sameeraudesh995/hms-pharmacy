interface StatCardProps {
    icon: string; // Material icon name
    label: string;
    value: number | string;
    percentage: string; // e.g. "16%" or "-5%"
}

export default function StatCard({
                                     icon = 'groups',
                                     label = 'Total Appointment',
                                     value = 5000,
                                     percentage = '16%',
                                 }: StatCardProps) {
    const isNegative = percentage.trim().startsWith('-');

    return (
        <div className="p-3 rounded-sm shadow-sm border bg-white w-full relative">
            {/* Menu Icon - Top Right */}
            <div className="absolute top-3 right-3">
                <button className="w-6 h-6 rounded-sm hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
            </div>

            {/* Icon and Stats */}
            <div className="flex flex-col">
                <div className="w-8 h-8 rounded-sm border flex items-center justify-center text-gray-600 mb-2">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
                <p className="text-[14px] text-gray-500">{label}</p>
                <p className="text-xl font-bold">{value}</p>
            </div>

            {/* Percentage Badge */}
            <div className="absolute bottom-3 right-4">
                <div
                    className={`border text-[14px] px-1 rounded-full flex items-center gap-1
                        ${isNegative
                        ? 'border-red-500 text-red-600'
                        : 'border-green-500 text-green-600'
                    }`}
                >
                    <span className="material-symbols-outlined text-sm">
                        {isNegative ? 'arrow_downward' : 'arrow_upward'}
                    </span>
                    {percentage}
                </div>
            </div>
        </div>
    );
}
