import { useState } from "react";

interface Props {
    onClose: () => void;
    onCreate: (data: any) => void;
    brandOptions: string[];
    supplierOptions: string[];
    drugOptions: string[];
    unitOptions: string[];
}

export default function AddInventoryModal({
                                              onClose,
                                              onCreate,
                                              brandOptions,
                                              supplierOptions,
                                              drugOptions,
                                              unitOptions,
                                          }: Props) {
    const [form, setForm] = useState({
        brand: "",
        supplier: "",
        drugName: "",
        expireDate: "",
        unit: "",
        type: "T",
        qty: "",
        date: "",
        state: "Active",
    });

    const stateColorMap: Record<string, string> = {
        Active: "bg-green-200 text-green-800",
        "No Stock": "bg-yellow-200 text-yellow-800",
        Expired: "bg-red-200 text-red-700",
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCreate = () => {
        const itemWithColor = {
            ...form,
            stateColor: stateColorMap[form.state] || "bg-gray-200 text-gray-800",
        };
        onCreate(itemWithColor);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white w-[850px] max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative">
                <h3 className="text-xl font-semibold mb-4">Add New Inventory</h3>
                <div className="grid grid-cols-3 gap-10 text-sm">
                    {/* Brand */}
                    <div>
                        <label className="block mb-1">Brand Name</label>
                        <select name="brand" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="">Select Brand</option>
                            {brandOptions.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="block mb-1">Supplier</label>
                        <select name="supplier" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="">Select Supplier</option>
                            {supplierOptions.map((supplier) => (
                                <option key={supplier} value={supplier}>{supplier}</option>
                            ))}
                        </select>
                    </div>

                    {/* Drug Name */}
                    <div>
                        <label className="block mb-1">Drug Name</label>
                        <select name="drugName" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="">Select Drug</option>
                            {drugOptions.map((drug) => (
                                <option key={drug} value={drug}>{drug}</option>
                            ))}
                        </select>
                    </div>

                    {/* Expire Date */}
                    <div>
                        <label className="block mb-1">Expire Date</label>
                        <input type="date" name="expireDate" onChange={handleChange} className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block mb-1">Unit (Mg/Ml)</label>
                        <select name="unit" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="">Select Unit</option>
                            {unitOptions.map((unit) => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block mb-1">Type</label>
                        <select name="type" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="T">T</option>
                            <option value="C">C</option>
                            <option value="S">S</option>
                            <option value="P">P</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block mb-1">Quantity</label>
                        <input type="number" name="qty" onChange={handleChange} placeholder="Quantity" className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block mb-1">Date</label>
                        <input type="date" name="date" onChange={handleChange} className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block mb-1">State</label>
                        <select name="state" onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="Active">Active</option>
                            <option value="No Stock">No Stock</option>
                            <option value="Expired">Expired</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="border px-4 py-2 rounded hover:bg-gray-100">Cancel</button>
                    <button onClick={handleCreate} className="bg-teal-500 text-white px-4 py-2 rounded">Create</button>
                </div>

                <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={onClose}>✕</button>
            </div>
        </div>
    );
}
