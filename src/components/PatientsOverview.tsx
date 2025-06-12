import { useState } from "react";
import AppointmentModal from "../components/AppointmentModal.tsx";
import UpdateAppointmentModal from "../components/UpdateAppointmentModal.tsx";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal.tsx";
import PrescriptionDetailsModal from "../components/PrescriptionDetailsModal.tsx";

const initialData = [
    {
        nic: "980442063v",
        name: "Mr Sadun Perera",
        doctor: "Mr Sadun Perera",
        prescriptionId: "xxxx234567890",
        drug: "2 Items",
        issueQty: 30,
        duration: "7 Days",
        date: "2025/02/18",
        status: "Processing",
        statusColor: "bg-red-200 text-red-700",
        time: "08:45 AM",
        brandName: "Brand X",
        drugName: "Paracetamol",
    },
    {
        nic: "980442063v",
        name: "Mr Sadun Perera",
        doctor: "Mr Sadun Perera",
        prescriptionId: "xxxx234567890",
        drug: "2 Items",
        issueQty: 30,
        duration: "7 Days",
        date: "2025/02/18",
        status: "Complete",
        statusColor: "bg-green-200 text-green-700",
        time: "10:15 AM",
        brandName: "Brand Y",
        drugName: "Ibuprofen",
    },
];

export default function PatientsOverview() {
    const [patientData, setPatientData] = useState(initialData);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [prescriptionModalVisible, setPrescriptionModalVisible] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleEditClick = (patient: any) => {
        setSelectedPatient(patient);
        setEditModalVisible(true);
    };

    const handleDeleteClick = (patient: any) => {
        setSelectedPatient(patient);
        setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        console.log("Delete request sent to admin for patient:", selectedPatient);
        setDeleteModalVisible(false);
        setSelectedPatient(null);
    };

    const handleViewClick = (patient: any) => {
        setSelectedPatient(patient);
        setPrescriptionModalVisible(true);
    };

    return (
        <div className="p-2 border bg-white rounded-sm relative">
            <AppointmentModal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={(newPatient) => setPatientData(prev => [...prev, newPatient])}
            />

            <UpdateAppointmentModal
                isOpen={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                onUpdate={(updated) =>
                    setPatientData(prev => prev.map(p => p.nic === updated.nic ? updated : p))
                }
                selectedPatient={selectedPatient}
            />

            <DeleteConfirmationModal
                isOpen={deleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={handleDeleteConfirm}
            />

            <PrescriptionDetailsModal
                open={prescriptionModalVisible}
                onClose={() => setPrescriptionModalVisible(false)}
                data={selectedPatient}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold w-full md:w-auto text-center md:text-left">
                    Patients Overview
                </h2>

                <div className="flex justify-end w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search NIC Number"
                        className="border text-[12px] border-gray-300 rounded-lg px-3 py-2 w-80"
                    />
                </div>

                <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end">
                    <button className="flex items-center border px-3.5 py-2.5 rounded-sm text-[14px] text-gray-600 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                        Weekly
                        <span className="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-[13px] table-auto border bg-white">
                    <thead className="bg-white">
                    <tr className="text-left">
                        {[
                            "NIC",
                            "Patient Name",
                            "Doctor",
                            "Prescriptions Id",
                            "Drug",
                            "Issue Qty",
                            "Duration",
                            "Date",
                            "States",
                            "Actions"
                        ].map((heading, index) => (
                            <th
                                key={index}
                                className="px-2 py-2 whitespace-nowrap font-medium text-[14px]"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {patientData.map((patient, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-2 py-2 whitespace-nowrap">{patient.nic}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.name}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.doctor}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.prescriptionId}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.drug}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.issueQty}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.duration}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{patient.date}</td>
                            <td className="px-2 py-2 whitespace-nowrap">
                  <span className={`text-[12px] px-2 py-1 rounded-full ${patient.statusColor}`}>
                    {patient.status}
                  </span>
                            </td>
                            <td className="px-2 py-2 whitespace-nowrap flex items-center gap-2">
                  <span
                      className="material-symbols-outlined text-[16px] cursor-pointer text-gray-600 hover:text-black"
                      onClick={() => handleViewClick(patient)}
                  >
                    visibility
                  </span>
                                <span
                                    className="material-symbols-outlined text-[16px] cursor-pointer hover:text-blue-500"
                                    onClick={() => handleEditClick(patient)}
                                >
                    edit
                  </span>
                                <span
                                    className="material-symbols-outlined text-red-500 text-[16px] cursor-pointer hover:text-red-700"
                                    onClick={() => handleDeleteClick(patient)}
                                >
                    delete
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
