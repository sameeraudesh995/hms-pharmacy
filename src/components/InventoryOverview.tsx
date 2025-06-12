import { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    ResponsiveContainer, Legend
} from 'recharts';

const generateSampleData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return months.map(month => ({
        name: month,
        2020: Math.floor(Math.random() * 70) + 20,
        2021: Math.floor(Math.random() * 70) + 20,
        2022: Math.floor(Math.random() * 70) + 20
    }));
};

const InventoryOverview = () => {
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

    if (isLoading) {
        return (
            <div className="p-6 bg-white rounded shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-white rounded shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
                <p className="text-red-500">{error}</p>
                <button
                    onClick={fetchInventoryData}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded shadow-sm w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Inventory Overview</h2>
                <button
                    className="flex items-center border px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                    Weekly
                    <span
                        className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                </button>
            </div>

            {/* Chart with fixed height */}
            <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{top: 20, right: 30, left: 0, bottom: 5}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Legend />
                        <Bar dataKey="2020" fill="#F87171" />
                        <Bar dataKey="2021" fill="#A78BFA" />
                        <Bar dataKey="2022" fill="#60A5FA" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default InventoryOverview;
