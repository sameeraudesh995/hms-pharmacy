// UpdateAppointmentModal.tsx
import { useEffect, useState } from "react";

export default function UpdateAppointmentModal({ isOpen, onClose, selectedPatient, onUpdate }: any) {
    const [formData, setFormData] = useState({
        name: "",
        nic: "",
        contact: "",
        address: "",
        doctor: "",
        time: "",
        date: "",
        status: "",
        channelFee: "",
    });

    useEffect(() => {
        if (selectedPatient) {
            setFormData({
                name: selectedPatient.name || "",
                nic: selectedPatient.nic || "",
                contact: selectedPatient.contact || "",
                address: selectedPatient.address || "",
                doctor: selectedPatient.doctor || "",
                time: selectedPatient.time || "",
                date: selectedPatient.date || "",
                status: selectedPatient.status || "",
                channelFee: selectedPatient.fee || "", // Map 'fee' to 'channelFee'
            });
        }
    }, [selectedPatient]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "New":
                return "bg-[#64DBE1] text-[#056B70]";
            case "Complete":
                return "bg-[#4CDA8A8F] text-[#11941E]";
            case "Postpone":
                return "bg-[#F1B2138F] text-[#985D09]";
            case "Canceled":
                return "bg-[#FC5B5E8F] text-[#8B0B0D]";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const handleSubmit = () => {
        const updatedPatient = {
            ...selectedPatient, // Keep all original fields including 'channel'
            name: formData.name,
            nic: formData.nic,
            contact: formData.contact,
            address: formData.address,
            doctor: formData.doctor,
            time: formData.time,
            date: formData.date,
            status: formData.status,
            statusColor: getStatusColor(formData.status), // Set status color based on status
            fee: formData.channelFee, // Map 'channelFee' back to 'fee'
            // channel number will be preserved from selectedPatient
        };
        onUpdate(updatedPatient);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl rounded-md p-4 shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Update Appointment</h2>
                    <button onClick={onClose} className="text-gray-600">×</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
                    <div>
                        <label>Patient Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="border  rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>NIC</label>
                        <input name="nic" value={formData.nic} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <input name="contact" value={formData.contact} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div className="md:col-span-2">
                        <label>Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Doctor</label>
                        <input name="doctor" value={formData.doctor} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Time</label>
                        <input name="time" value={formData.time} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Schedule Date</label>
                        <input name="date" type="date" value={formData.date} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Channel Fee</label>
                        <input name="channelFee" value={formData.channelFee} onChange={handleChange} className="border rounded p-2 w-full text-[12px]" />
                    </div>
                    <div>
                        <label>Status</label>
                        <select name="status" value={formData.status} onChange={handleChange} className="border rounded p-2 w-full text-[12px]">
                            <option value="">Select Status</option>
                            <option value="New">New</option>
                            <option value="Complete">Complete</option>
                            <option value="Postpone">Postpone</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onClose} className="border border-gray-300 px-3.5 py-2.5 rounded text-[14px]">Cancel</button>
                    <button onClick={handleSubmit} className="bg-secondary text-white px-3.5 py-2.5 rounded text-[14px]">Update</button>
                </div>
            </div>
        </div>
    );
}
