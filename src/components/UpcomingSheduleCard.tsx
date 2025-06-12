import { useState } from "react";

const mainTimeMarkers = ["8:00", "9:00", "10:00"];

const appointmentsByTime = {
    "8:00": [
        { time: "8:00", title: "Consultation Abdul Nishan", active: false, completed: true, isMainTime: false },
        { time: "8:20", title: "Consultation Adamu", active: false, completed: true, isMainTime: false },
        {
            time: "8:30",
            title: "Consultation Vibha",
            active: true,
            isMainTime: false,
            patient: "Vibha Jayarajan",
            duration: "8:30 - 9:00",
            purpose: "General check-up"
        }
    ],
    "9:00": [
        { time: "9:00", title: "Consultation Abayomi Johnson", active: false, isMainTime: false },
        { time: "9:30", title: "Rebecca Gifts", active: false, isMainTime: false }
    ],
    "10:00": []
};

// @ts-ignore
const ScheduleCard = ({ appointment }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDetails = () => setIsOpen(prev => !prev);

    return (
        <div className="border rounded-[3px] bg-white p-2 w-full ml-[-12px] mb-2 relative">
            <div className="flex items-center mb-4">
                <div className="flex-1 flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span className="text-blue-500 text-[13px] font-medium">{appointment.time}</span>
                    <span className="text-blue-500 text-[13px] font-medium">{appointment.title}</span>
                </div>
                <button
                    onClick={toggleDetails}
                    className="text-blue-500 transition-transform duration-300 ease-in-out"
                >
          <span className="material-symbols-outlined text-[16px]">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
                </button>
            </div>

            {isOpen && (
                <>
                    <div className="space-y-2 text-gray-700 text-[11px]">
                        <div className="flex justify-between">
                            <span className="font-medium w-12 ">Patient</span>
                            <span className="flex-1">{appointment.patient}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-12">Time</span>
                            <span className="flex-1">{appointment.duration}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-12">Purpose</span>
                            <span className="flex-1">{appointment.purpose}</span>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 pt-2 border-t">
                        <button className="text-red-500">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                        <button className="text-blue-500 text-[12px]">Begin appointment</button>
                    </div>
                </>
            )}
        </div>
    );
};

const UpcomingScheduleCard = () => {
    return (
        <div className="p-2 w-full h-full bg-white rounded-sm border shadow-sm flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-[20px] text-black font-semibold">Upcoming schedule</h2>
                    <button
                        className="flex items-center border px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                        Weekly
                        <span
                            className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                    </button>

            </div>

            {/* Scrollable content with hidden scrollbar */}
            <div className="relative overflow-y-auto pr-1 flex-1 scrollbar-hide">
                <style>
                    {`
          .scrollbar-hide::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          `}
                </style>

                <div className="absolute left-16 top-0 bottom-3 w-px bg-gray-200"></div>

                {mainTimeMarkers.map((mainTime, i) => (
                    <div key={i} className="mb-6 relative">
                        <div className="flex mb-4">
                            <div className="text-gray-500 text-[12px] w-12 text-right mt-[-3px] mr-5">{mainTime}</div>
                            <div className="w-2 h-2 rounded-full bg-gray-300 absolute left-16 transform -translate-x-1"></div>
                        </div>

                        <div className="pl-16">
                            {appointmentsByTime[mainTime].map((appt, j) => !appt.isMainTime && (
                                <div key={j} className="relative mb-3">
                                    <div className={`absolute left-4 top-1.5 w-1 h-1 rounded-full ${appt.active ? "bg-white-500" : "bg-gray-300"}`}></div>
                                    <div className="ml-6">
                                        {!appt.active ? (
                                            <div className={`flex gap-2 text-[11px] ${appt.completed ? "text-gray-400 line-through" : "text-gray-700"}`}>
                                                <span className="text-gray-400">{appt.time}</span>
                                                <span>{appt.title}</span>
                                            </div>
                                        ) : (
                                            <ScheduleCard appointment={appt} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingScheduleCard;
