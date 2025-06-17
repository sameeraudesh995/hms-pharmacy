import { useState, useEffect, useRef } from "react";

const filterStructure = [
    {
        label: "Yearly",
        sub: ["Active", "Out of Stock", "Expire Stock"],
    },
    {
        label: "Monthly",
        sub: ["Active", "Out of Stock", "Expire Stock"],
    },
    {
        label: "Weekly",
        sub: ["Active", "Out of Stock", "Expire Stock"],
    },
];

export default function FilterDropdown() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedMain, setSelectedMain] = useState<string | null>(null);
    const menuRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
                setMenuOpen(false);
                setSelectedMain(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            {/* Toggle Button */}
            <button
                onClick={() => {
                    setMenuOpen((prev) => !prev);
                    setSelectedMain(null);
                }}
                className="flex items-center border px-3.5 py-2.5 rounded-sm text-[14px] text-gray-600 hover:bg-gray-100"
            >
                <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                Filter
                <span className="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
            </button>

            {/* Main Dropdown */}
            {menuOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                    {filterStructure.map((main) => (
                        <div key={main.label} className="relative">
                            {/* Main item */}
                            <div
                                onClick={() =>
                                    setSelectedMain((prev) => (prev === main.label ? null : main.label))
                                }
                                className="px-4 py-2 text-sm cursor-pointer hover:text-secondary"
                            >
                                {main.label}
                            </div>

                            {/* Submenu to the left */}
                            {selectedMain === main.label && (
                                <div className="absolute top-0 right-full mr-2 w-40 bg-white border rounded shadow-lg z-50">
                                    {main.sub.map((sub, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 text-sm cursor-pointer hover:text-secondary"
                                        >
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
