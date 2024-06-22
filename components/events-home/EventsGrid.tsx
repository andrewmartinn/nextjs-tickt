import { Event } from "@/libs/definitions";
import EventCard from "./EventCard";

interface EventsGridProps {
  events: Event[];
}

const EventsGrid = ({ events }: EventsGridProps) => {
  return (
    <div className=" ">
      <div className="grid grid-cols-3 gap-5">
        {events.map((evt) => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </div>
  );
};
export default EventsGrid;
