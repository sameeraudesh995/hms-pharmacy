import { useState, useEffect } from "react";

export default function UpdatePrescriptionModal({ open, onClose, data, onUpdate }:any) {
    const [formData, setFormData] = useState({
        brandName:'',
        drugName:'',
        strength: '',
        dosage: '',
        issueQty: '',
        duration: ''
    });

    const [showPrescriptionOverview, setShowPrescriptionOverview] = useState(false);

    useEffect(() => {
        if (data) {
            setFormData({
                brandName:data.brandaName || '',
                drugName:data.drugName || '',
                strength: data.strength || '',
                dosage: data.dosage || '',
                issueQty: data.issueQty || '',
                duration: data.duration || ''
            });
        }
    }, [data]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleUpdate = () => {
        if (data) {
            onUpdate({ ...data, ...formData });
        }
        onClose();
    };

    if (!open || !data) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Update Prescription</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                <div className="p-6">
                    {/* Basic Patient Details */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Patients Details</h3>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">Patient Name : </span>
                                <span className="text-sm text-gray-900">{data.name || 'W Maduka Avishka'}</span>
                            </div>
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">Doctor Name : </span>
                                <span className="text-sm text-gray-900">{data.doctor || 'Sadun Perera'}</span>
                            </div>
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">Date : </span>
                                <span className="text-sm text-gray-900">{data.date || '2025/10/15'}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">Issued Time : </span>
                                <span className="text-sm text-gray-900">{data.issuedTime || '8:00 PM'}</span>
                            </div>
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">NIC Number : </span>
                                <span className="text-sm text-gray-900">{data.nic || '983040206V'}</span>
                            </div>
                            <div className="bg-[#4AA7AC]/20 p-3 rounded-md">
                                <span className="text-sm font-medium text-gray-600">Prescriptions Id : </span>
                                <span className="text-sm text-gray-900">{data.prescriptionId || '983040'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Prescription Overview */}
                    <div className="mb-6">
                        <button
                            onClick={() => setShowPrescriptionOverview(!showPrescriptionOverview)}
                            className="flex items-center justify-between w-full text-left"
                        >
                            <h3 className="text-lg font-medium text-gray-900">Prescription Overview</h3>
                            <span className="material-symbols-outlined text-gray-400 transition-transform" style={{
                                transform: showPrescriptionOverview ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                keyboard_arrow_down
                            </span>
                        </button>

                        {showPrescriptionOverview && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-md">
                                {/* This is where prescription PDF/image would be displayed */}
                                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <p className="text-gray-500">Prescription PDF/Image will be displayed here</p>
                                    <p className="text-sm text-gray-400 mt-2">Click to view full prescription document</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Editable Fields */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={data.brandName }
                                onChange={e => handleChange('brandName', e.target.value)}
                                placeholder="Omega"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Drug Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={data.drugName }
                                onChange={e => handleChange('drugName', e.target.value)}
                                placeholder="Omeprazole"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Strength (Ml/Mg)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.strength}
                                onChange={e => handleChange('strength', e.target.value)}
                                placeholder="50Mg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Dosage (T/C/S)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.dosage}
                                onChange={e => handleChange('dosage', e.target.value)}
                                placeholder="1"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Duration (D/W/M)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.duration}
                                onChange={e => handleChange('duration', e.target.value)}
                                placeholder="7 D"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Issued QTY</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.issueQty}
                                onChange={e => handleChange('issueQty', e.target.value)}
                                placeholder="4"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
                        >
                            Update Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
