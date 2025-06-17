import { useState } from "react";

export default function AppointmentModal({ isOpen, onClose, onAdd }:any) {
    const [formData, setFormData] = useState({
        name: "",
        nic: "",
        contact: "",
        address: "",
        email: "",
        channel: "",
        doctor: "",
        time: "",
        date: "",
        fee: "",
        status: "New",
        verifiedBy: "Saman Silva",
        statusColor: "bg-cyan-200 text-cyan-700",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        onAdd(formData);
        setFormData({
            name: "",
            nic: "",
            contact: "",
            address: "",
            email: "",
            channel: "",
            doctor: "",
            time: "",
            date: "",
            fee: "",
            status: "New",
            verifiedBy: "Saman Silva",
            statusColor: "bg-cyan-200 text-cyan-700",
        });
        onClose();
    };

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-2xl shadow-lg relative">
                <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Appointment Overview</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[16px]">
                        {[
                            { label: "Patient Name", name: "name" },
                            { label: "NIC", name: "nic" },
                            { label: "Contact Number", name: "contact" },
                            { label: "Address", name: "address" },
                            { label: "Email Address", name: "email" },
                            { label: "Channel Number", name: "channel" },
                            { label: "Doctor", name: "doctor" },
                            { label: "Time", name: "time", placeholder: "3:40PM" },
                            { label: "Schedule Date", name: "date", type: "date" },
                            { label: "Channel Fee (LKR)", name: "fee" },
                            { label: "Status", name: "status" },
                        ].map(({ label, name, type = "text", placeholder }) => (
                            <div key={name}>
                                <label className="block text-gray-700 text-[14px] mb-1">{label}</label>
                                <input
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    // @ts-ignore
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded w-full text-sm"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Invisible submit button for Enter key */}
                    <button type="submit" className="hidden">Submit</button>
                </form>
            </div>
        </div>
    );
}
