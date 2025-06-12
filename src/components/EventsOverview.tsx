import EventList from './EventList';

const EventsOverview = () => {
    return (
        <div className="relative p-2 bg-white">
            {/* Top-right button */}
            <div className="absolute top-2 right-2">
                <button className="flex items-center border px-3.5 py-2.5 rounded-md text-[14px] text-gray-600 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-[16px] mr-1">calendar_month</span>
                    Weekly
                    <span className="material-symbols-outlined font-thin text-[16px] ml-1">keyboard_arrow_down</span>
                </button>
            </div>

            {/* Content Block: Title + Scrollable List */}
            <div className="mr-24 w-[90%]">
                <h2 className="text-[20px] font-semibold mb-3">Events Overview</h2>

                {/* Scrollable container with hidden scrollbars */}
                <div className="max-h-72 overflow-auto custom-scrollbar border-red-600 pr-1 mt-2">
                    <EventList />
                </div>
            </div>
        </div>
    );
};

export default EventsOverview;
