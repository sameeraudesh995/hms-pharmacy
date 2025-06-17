// components/UpdateInventoryModal.tsx
import { useState, useEffect } from "react";

interface Props {
    onClose: () => void;
    onUpdate: (data: any) => void;
    initialData: any;
    brandOptions: string[];
    supplierOptions: string[];
    drugOptions: string[];
    unitOptions: string[];
}

export default function UpdateInventoryModal({
                                                 onClose,
                                                 onUpdate,
                                                 initialData,
                                                 brandOptions,
                                                 supplierOptions,
                                                 drugOptions,
                                                 unitOptions,
                                             }: Props) {
    const [form, setForm] = useState({ ...initialData });

    useEffect(() => {
        setForm(initialData);
    }, [initialData]);

    const stateColorMap: Record<string, string> = {
        Active: "bg-green-200 text-green-800",
        "No Stock": "bg-yellow-200 text-yellow-800",
        Expired: "bg-red-200 text-red-700",
    };

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        const updatedItem = {
            ...form,
            stateColor: stateColorMap[form.state] || "bg-gray-200 text-gray-800",
        };
        onUpdate(updatedItem);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white w-[800px] max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative">
                <h3 className="text-xl font-semibold mb-4">Update Inventory</h3>

                <div className="grid grid-cols-3 gap-10 text-sm">
                    {/* Brand */}
                    <div>
                        <label className="block text-xs mb-1">Brand Name</label>
                        <select name="brand" value={form.brand} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            {brandOptions.map((b) => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="block text-xs mb-1">Supplier</label>
                        <select name="supplier" value={form.supplier} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            {supplierOptions.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    {/* Drug Name */}
                    <div>
                        <label className="block text-xs mb-1">Drug Name</label>
                        <select name="drugName" value={form.drugName} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            {drugOptions.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>

                    {/* Expire Date */}
                    <div>
                        <label className="block text-xs mb-1">Expire Date</label>
                        <input type="date" name="expireDate" value={form.expireDate} onChange={handleChange} className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block text-xs mb-1">Units (Mg/Ml)</label>
                        <select name="unit" value={form.unit} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            {unitOptions.map((u) => (
                                <option key={u} value={u}>{u}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-xs mb-1">(T/C/S)</label>
                        <select name="type" value={form.type} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="T">T</option>
                            <option value="C">C</option>
                            <option value="S">S</option>
                            <option value="P">P</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-xs mb-1">Quantity (QTY)</label>
                        <input name="qty" type="number" value={form.qty} onChange={handleChange} className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* Create Date */}
                    <div>
                        <label className="block text-xs mb-1">Create Date</label>
                        <input name="date" type="date" value={form.date} onChange={handleChange} className="border px-2 py-2 rounded w-full" />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-xs mb-1">Stock State</label>
                        <select name="state" value={form.state} onChange={handleChange} className="border px-2 py-2 rounded w-full">
                            <option value="Active">Active</option>
                            <option value="No Stock">No Stock</option>
                            <option value="Expired">Expired</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="border px-4 py-2 rounded hover:bg-gray-100">Cancel</button>
                    <button onClick={handleUpdate} className="bg-secondary text-white px-4 py-2 rounded">Update</button>
                </div>

                <button className="absolute top-4 right-4 text-gray-500 hover:text-black" onClick={onClose}>✕</button>
            </div>
        </div>
    );
}
