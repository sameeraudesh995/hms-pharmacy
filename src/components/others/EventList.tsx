import EventCard from './EventCard.tsx';

const events = new Array(8).fill({
    title: 'Meditation',
    time: '5:00PM - 6:00PM',
    coach: 'Tim Bjorvick',
});

const EventList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((event, index) => (
                <EventCard key={index} {...event} />
            ))}
        </div>
    );
};

export default EventList;
