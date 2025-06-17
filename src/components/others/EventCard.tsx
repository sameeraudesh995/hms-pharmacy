const EventCard = ({ title, time, coach }:any) => {
    return (
        <div className=" bg-[#f1f9ff] rounded-sm p-2 max-w-[200px]">
            <h3 className="text-[14px] font-bold text-secondary">{title}</h3>
            <p className="text-[12px] text-gray-600">{time}</p>
            <p className="text-[12px] text-gray-600">Coach: {coach}</p>
        </div>
    );
};

export default EventCard;
// bg-[#f1f9ff]
