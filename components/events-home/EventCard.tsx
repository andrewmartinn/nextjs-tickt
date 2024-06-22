import { Event } from "@/libs/definitions";
import { formatDateString } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href={`/events/${event.id}`} className=" bg-none">
      <Image
        src={event.image}
        height="250"
        width="520"
        alt={event.image}
        className="rounded-lg shadow-xl"
      />
      <div className="mt-4">
        <p className="font-bold text-md pt-4 pb-1">{event.name}</p>
        <div className="flex items-center gap-3">
          <p className="">{event.venue}</p>
          <span>|</span>
          <p>{formatDateString(event.date)}</p>
        </div>
        {event.tags.length > 0 && (
          <div className="flex items-center gap-3 mt-2">
            {event.tags.map((tag, index) => (
              <div
                className="bg-gray-200 text-black px-4 py-1 rounded-full text-sm font-bold"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
