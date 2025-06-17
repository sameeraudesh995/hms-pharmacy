                                                                                                                                                                                                                                                                                                                                                                                                               import { useState } from "react";
import AppointmentModal from "./others/AppointmentModal.tsx";
import UpdatePrescriptionModal from "../components/UpdatePrescriptionModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import PrescriptionDetailsModal from "../components/PrescriptionDetailsModal";

interface Patient {
    nic: string;
    name: string;
    doctor: string;
    prescriptionId: string;
    drugs: string;
    issueQty: number;
    duration: string;
    date: string;
    status: string;
    statusColor: string;
    time: string;
    brandName: string;
    drugName: string;
    frequency: string;
    strength: string;
    dosage: string;
}

const initialData: Patient[] = [
    {
        nic: "980442063v",
        name: "Mr Sadun Perera",
        doctor: "Mr Sadun Perera",
        prescriptionId: "xxxx234567890",
        drugs: "2 Items",
        issueQty: 30,
        duration: "7 Days",
        date: "2025/02/18",
        status: "Processing",
        statusColor: "bg-red-200 text-red-700",
        time: "08:45 AM",
        brandName: "Brand X",
        frequency: "bd",
        drugName: "Paracetamol",
        strength: "500mg",
        dosage: "T",
    },
    {
        nic: "9906542063v",
        name: "Mr Sadun Perera",
        doctor: "Mr Sadun Perera",
        prescriptionId: "xxxx234567890",
        drugs: "2 Items",
        issueQty: 30,
        duration: "7 Days",
        date: "2025/02/18",
        status: "Complete",
        statusColor: "bg-green-200 text-green-700",
        time: "10:15 AM",
        brandName: "Brand Y",
        frequency: "tds",
        drugName: "Ibuprofen",
        strength: "250mg",
        dosage: "C",
    },
];

export default function PatientsOverview() {
    const [patientData, setPatientData] = useState<Patient[]>(initialData);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [prescriptionModalVisible, setPrescriptionModalVisible] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [searchNIC, setSearchNIC] = useState("");

    const handleEditClick = (patient: Patient) => {
        setSelectedPatient(patient);
        setEditModalVisible(true);
    };

    const handleDeleteClick = (patient: Patient) => {
        setSelectedPatient(patient);
        setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        setPatientData(prev => prev.filter(p => p.nic !== selectedPatient?.nic));
        setDeleteModalVisible(false);
        setSelectedPatient(null);
    };

    const handleViewClick = (patient: Patient) => {
        setSelectedPatient(patient);
        setPrescriptionModalVisible(true);
    };

    const filteredPatients = patientData.filter(patient =>
        patient.nic.toLowerCase().includes(searchNIC.toLowerCase())
    );

    return (
        <div className="p-4 border bg-white rounded-md relative">
            {/* Modals */}
            {modalVisible && (
                <AppointmentModal
                    isOpen={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onAdd={(newPatient: Patient) =>
                        setPatientData(prev => [...prev, newPatient])
                    }
                />
            )}

            {editModalVisible && selectedPatient && (
                <UpdatePrescriptionModal
                    open={editModalVisible}
                    onClose={() => setEditModalVisible(false)}
                    data={selectedPatient}
                    onUpdate={(updated) =>
                        setPatientData(prev => prev.map(p => p.nic === updated.nic ? updated : p))
                    }
                />
            )}


            {deleteModalVisible && (
                <DeleteConfirmationModal
                    isOpen={deleteModalVisible}
                    onClose={() => setDeleteModalVisible(false)}
                    onConfirm={handleDeleteConfirm}
                />
            )}

            {prescriptionModalVisible && selectedPatient && (
                <PrescriptionDetailsModal
                    open={prescriptionModalVisible}
                    onClose={() => setPrescriptionModalVisible(false)}
                    data={selectedPatient}
                />
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold w-full md:w-auto text-center md:text-left">
                    Patients Overview
                </h2>
                <div className="flex flex-row justify-end items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search NIC Number"
                        value={searchNIC}
                        onChange={e => setSearchNIC(e.target.value)}
                        className="border text-sm border-gray-300 rounded-md px-3 py-2 w-80"
                    />
                    <button
                        className="flex items-center border px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                        Weekly
                        <span
                            className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                    </button>
                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm table-auto border bg-white">
                    <thead>
                    <tr className="text-left">
                        {[
                            "NIC",
                            "Patient Name",
                            "Doctor",
                            "Prescriptions Id",
                            "Drugs" ,
                            "frequency",
                            "Issue Qty",
                            "Duration",
                            "Date",
                            "Status",
                            "Actions",
                        ].map((heading, index) => (
                            <th
                                key={index}
                                className="px-3 py-2 whitespace-nowrap font-medium text-gray-700"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPatients.map((patient, index) => (
                        <tr key={index} className="border-t hover:bg-gray-50">
                            <td className="px-3 py-2 whitespace-nowrap">{patient.nic}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.name}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.doctor}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.prescriptionId}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.drugName}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.frequency}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.issueQty}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.duration}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{patient.date}</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                  <span className={`text-xs px-2 py-1 rounded-full ${patient.statusColor}`}>
                    {patient.status}
                  </span>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap flex items-center gap-2">
                  <span
                      className="material-symbols-outlined cursor-pointer text-gray-600 hover:text-black text-base"
                      onClick={() => handleViewClick(patient)}
                  >
                    visibility
                  </span>
                                <span
                                    className="material-symbols-outlined cursor-pointer text-gray-600 hover:text-blue-700 text-base"
                                    onClick={() => handleEditClick(patient)}
                                >
                    edit
                  </span>
                                <span
                                    className="material-symbols-outlined cursor-pointer text-red-500 hover:text-red-700 text-base"
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
