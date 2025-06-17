

const InputField = ({ label, value, disabled = true }) => (
    <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            value={value}
            disabled={disabled}
            className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-700"
            readOnly
        />
    </div>
);

export default function ViewInventoryModal({ onClose, data }) {
    const sampleData = data || {
        brand: "Crorex D",
        supplier: "ABC",
        drugName: "Vitamin C",
        expireDate: "2025/7/18",
        unit: "50",
        type: "P",
        qty: "400",

        date: "2025/12/23",
        state: "Active"
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Inventory Overview</h2>
                    <div className="flex justify-end mb-4">
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
                            ×
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* First Row */}
                        <InputField label="Brand Name" value={sampleData.brand} />
                        <InputField label="Supplier" value={sampleData.supplier} />
                        <InputField label="Drug name" value={sampleData.drugName} />

                        {/* Second Row */}
                        <InputField label="Expire Date" value={sampleData.expireDate} />
                        <InputField label="Units (Mg/Ml)" value={sampleData.unit} />
                        <InputField label="(T/C/S)" value={sampleData.type} />

                        {/* Third Row */}
                        <InputField label="Quantity (QTY)" value={sampleData.qty} />
                        <InputField label="Create Date" value={sampleData.date} />
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-medium text-gray-700">Stock State</label>
                            <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 flex items-center">
                                <span className="text-gray-900">{sampleData.state}</span>
                                <span className="inline-block w-1.5 h-1.5 bg-green-500 mt-1.5 rounded-full ml-2"></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
