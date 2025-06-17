
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from 'recharts';

const data = [
    { month: 'Jan', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Feb', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Mar', '2020': 5000, '2021': 0, '2022': 0 },
    { month: 'Apr', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'May', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Jun', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Jul', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Aug', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Sep', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Oct', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Nov', '2020': 0, '2021': 0, '2022': 0 },
    { month: 'Dec', '2020': 0, '2021': 0, '2022': 0 },
];

const ExpireMedicineChart = () => {
    return (
        <div className="bg-white rounded-sm p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Expire Medicine</h2>
                <button
                    className="flex items-center border px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                    Weekly
                    <span
                        className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                </button>
            </div>
            <ResponsiveContainer width="100%" height={430}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="2020" stroke="blue" fill="blue" />
                    <Line type="monotone" dataKey="2021" stroke="red" fill="red" />
                    <Line type="monotone" dataKey="2022" stroke="green" fill="green" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpireMedicineChart;
