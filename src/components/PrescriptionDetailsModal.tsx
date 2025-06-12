interface PrescriptionDetailsModalProps {
    open: boolean;
    onClose: () => void;
    data: any;
}

export default function PrescriptionDetailsModal({ open, onClose, data }: PrescriptionDetailsModalProps) {
    if (!open || !data) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Basic Patients Details</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                {/* Patient Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">Patient Name</div>
                        <div className="font-medium">{data.name}</div>
                    </div>
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">Doctor Name</div>
                        <div className="font-medium">{data.doctor}</div>
                    </div>
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">Date</div>
                        <div className="font-medium">{data.date}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">Issued Time</div>
                        <div className="font-medium">{data.time}</div>
                    </div>
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">NIC Number</div>
                        <div className="font-medium">{data.nic}</div>
                    </div>
                    <div className="bg-[#4AA7AC]/20 p-3 rounded">
                        <div className="text-sm text-gray-600 mb-1">Prescriptions Id</div>
                        <div className="font-medium">{data.prescriptionId}</div>
                    </div>
                </div>

                {/* Prescription Overview */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Prescription Overview</h3>
                        <span className="material-symbols-outlined text-gray-400">expand_less</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Brand Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                            <input
                                type="text"
                                value={data.brandName || 'N/A'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>

                        {/* Drug Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Drug Name</label>
                            <input
                                type="text"
                                value={data.drugName || 'N/A'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>

                        {/* Strength */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Strength (Ml/Mg)</label>
                            <input
                                type="text"
                                value={data.strength || '50Mg'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>

                        {/* Dosage */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Dosage (T/C/S)</label>
                            <input
                                type="text"
                                value={data.dosage || '1'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Duration (D/W/M)</label>
                            <input
                                type="text"
                                value={data.duration || 'N/A'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>

                        {/* Issued QTY */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Issued QTY</label>
                            <input
                                type="text"
                                value={data.issueQty || 'N/A'}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
