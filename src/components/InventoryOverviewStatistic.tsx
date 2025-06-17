import { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    ResponsiveContainer, Tooltip
} from 'recharts';

const generateSampleData = () => {
    const medicines = [
        'Paracetamol', 'Aspirin', 'Ibuprofen', 'Amoxicillin', 'Metformin',
        'Lisinopril', 'Simvastatin', 'Omeprazole', 'Amlodipine', 'Atorvastatin',
        'Losartan', 'Gabapentin'
    ];

    return medicines.map(medicine => ({
        name: medicine,
        quantity: Math.floor(Math.random() * 500) + 50
    }));
};

const InventoryOverviewStatistic = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
    const [error, setError] = useState(null);

    const fetchInventoryData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const inventoryData = generateSampleData();
            setData(inventoryData);
        } catch (err) {
            // @ts-ignore
            setError('Failed to fetch inventory data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInventoryData();
    }, [selectedPeriod]);

    const handlePeriodChange = (period) => setSelectedPeriod(period);

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/95 backdrop-blur-sm p-3 border border-blue-200 rounded-lg shadow-xl">
                    <p className="font-semibold text-gray-800">{`Medicine: ${label}`}</p>
                    <p className="text-blue-600 font-medium">
                        {`Quantity: ${payload[0].value} units`}
                    </p>
                </div>
            );
        }
        return null;
    };

    if (isLoading) {
        return (
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Medicine Inventory Overview</h2>
                <div className="flex items-center justify-center h-[500px] bg-white/60 backdrop-blur-sm rounded-lg">
                    <p className="text-gray-600 text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Medicine Inventory Overview</h2>
                <div className="flex flex-col items-center justify-center h-[500px] bg-white/60 backdrop-blur-sm rounded-lg">
                    <p className="text-red-500 text-lg mb-4">{error}</p>
                    <button
                        onClick={fetchInventoryData}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6  rounded-sm  w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Medicine Inventory Overview</h2>
                <button
                    className="flex items-center border  bg-white/80 backdrop-blur-sm px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-white transition-all duration-200 shadow-sm">
                    <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                    Weekly
                    <span
                        className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                </button>
            </div>

            {/* Chart with increased height */}
            <div className="w-full h-[400px] bg-white/60 backdrop-blur-sm rounded-sm p-2 ">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{top: 20, right: 60, left: 5, bottom:0}}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} className="bg-blue-500"/>
                        <XAxis
                            dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            interval={0}
                            fontSize={12}
                            stroke="#64748b"
                        />
                        <YAxis
                            label={{ value: 'Quantity (units)', angle: -90, position: 'insideLeft' }}
                            stroke="#64748b"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="quantity"
                            stroke="#2563eb"
                            strokeWidth={3}
                            dot={{ fill: '#2563eb', strokeWidth: 2, r: 5 }}
                            activeDot={{ r: 8, stroke: '#2563eb', strokeWidth: 2, fill: '#3b82f6' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default InventoryOverviewStatistic;
