import { useState } from "react";
import FilterDropdown from "../FilterDropdown.tsx";
import AddInventoryModal from "../inventory/AddInventoryModal.tsx";
import UpdateInventoryModal from "../inventory/UpdateInventoryModal.tsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal.tsx";
import ViewInventoryModal from "../inventory/ViewInventoryModal.tsx";

const initialInventory = [
    {
        brand: "Panadol",
        supplier: "ABC Pharma",
        drugName: "Paracetamol",
        expireDate: "2025-12-31",
        unit: "500mg",
        type: "T",
        qty: 100,
        date: "2024-06-01",
        state: "Active",
        stateColor: "bg-green-200 text-green-800",
    },
    // Add more as needed
];

export default function InventoryOverview() {
    const [inventoryData, setInventoryData] = useState(initialInventory);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [viewItem, setViewItem] = useState(null);


    const handleAddNewInventory = (newItem: any) => {
        setInventoryData([...inventoryData, newItem]);
    };

    const handleEditClick = (item: any) => {
        setSelectedItem(item);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateInventory = (updatedItem: any) => {
        const updatedData = inventoryData.map((item) =>
            item === selectedItem ? updatedItem : item
        );
        setInventoryData(updatedData);
        setSelectedItem(null);
    };
    const handleViewClick = (item: any) => {
        setViewItem(item);
    };


    const handleDeleteClick = (item: any) => {
        setSelectedItem(item);
        setDeleteModalVisible(true);
    };
    return (
        <div className="p-2 border bg-white rounded-sm relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold w-full md:w-auto text-center md:text-left">
                    Inventory Overview
                </h2>

                <div className="flex justify-center w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search Drug Name"
                        className="border text-[12px] border-gray-300 rounded-lg px-3 py-2 w-80"
                    />
                </div>

                <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end">
                    <button
                        className="bg-secondary text-[14px] text-white px-3.5 py-2.5 rounded-sm flex items-center gap-1"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        Add New
                    </button>
                    <FilterDropdown />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-[13px] table-auto border bg-white">
                    <thead className="bg-white">
                    <tr className="text-left">
                        {[
                            "Brand Name",
                            "Supplier",
                            "Drug Name",
                            "Expire Date",
                            "Units (Mg/Ml)",
                            "T/C/S",
                            "QTY",
                            "Date",
                            "State",
                            "Actions",
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
                    {inventoryData.map((item, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-2 py-2 whitespace-nowrap">{item.brand}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.supplier}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.drugName}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.expireDate}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.unit}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.type}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.qty}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{item.date}</td>
                            <td className="px-2 py-2 whitespace-nowrap">
                  <span
                      className={`text-[12px] px-2 py-1 rounded-full ${item.stateColor}`}
                  >
                    {item.state}
                  </span>
                            </td>
                            <td className="px-2 py-2 whitespace-nowrap flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] cursor-pointer"
                                      onClick={() => handleViewClick(item)}>visibility</span>
                                <span
                                    className="material-symbols-outlined text-[16px] cursor-pointer"
                                    onClick={() => handleEditClick(item)}
                                >
                    edit
                  </span>
                                <span
                                    className="material-symbols-outlined text-red-500 text-[16px] cursor-pointer"
                                    onClick={() => handleDeleteClick(item)}
                                >
                    delete
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Add Modal */}
            {isAddModalOpen && (
                <AddInventoryModal
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleAddNewInventory}
                    brandOptions={["Panadol", "Astrix", "Metformin", "Salbutamol"]}
                    supplierOptions={["ABC Pharma", "MediSupplies Ltd", "Global Health", "RespiraCare"]}
                    drugOptions={["Paracetamol", "Aspirin", "Metformin HCl", "Ventolin"]}
                    unitOptions={["500mg", "75mg", "1000mg", "2mg"]}
                />
            )}

            {/* Update Modal */}
            {isUpdateModalOpen && selectedItem && (
                <UpdateInventoryModal
                    onClose={() => {
                        setIsUpdateModalOpen(false);
                        setSelectedItem(null);
                    }}
                    onUpdate={handleUpdateInventory}
                    initialData={selectedItem}
                    brandOptions={["Panadol", "Astrix", "Metformin", "Salbutamol"]}
                    supplierOptions={["ABC Pharma", "MediSupplies Ltd", "Global Health", "RespiraCare"]}
                    drugOptions={["Paracetamol", "Aspirin", "Metformin HCl", "Ventolin"]}
                    unitOptions={["500mg", "75mg", "1000mg", "2mg"]}
                />
            )}

            {deleteModalVisible && (
                <DeleteConfirmationModal
                    isOpen={deleteModalVisible}
                    onClose={() => setDeleteModalVisible(false)}
                    //onConfirm={handleDeleteConfirm}
                />
            )}

            {viewItem && (
                <ViewInventoryModal
                    data={viewItem}
                    onClose={() => setViewItem(null)}
                />
            )}

        </div>
    );
}
