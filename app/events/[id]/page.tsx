import EventTicketDetails from "@/components/event-details/EventTicketDetails";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Event } from "@/libs/definitions";
import { FaChevronRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { fetchEventsById } from "@/libs/events";
import { formatDateString } from "@/libs/utils";

interface EventDetailsProps {
  params: {
    id: string;
  };
}

const EventDetails = async ({ params }: EventDetailsProps) => {
  const event: Event = await fetchEventsById(params.id);
  return (
    <div className="container mx-auto px-[1rem] py-[1rem]">
      <div className="w-1/2 mx-auto py-5">
        <Image
          src={event.image}
          height="600"
          width="800"
          alt=""
          className="rounded-lg object-cover"
        />
        <div className="flex justify-between items-center">
          <p className="py-3 text-4xl font-bold">{event.name}</p>
          <p className="py-2 text-xl font-bold">
            {formatDateString(event.date)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={event.eventOrganizer.logo}
            height={0}
            width={50}
            className="rounded-[50%] h-[28px] w-[28px]"
            alt=""
          />
          <p className="font-bold">{event.eventOrganizer.name}</p>
        </div>
        <div className="flex gap-2 pt-4">
          {event.tags.map((tag, index) => (
            <div
              className="bg-gray-200 text-black px-4 py-1 rounded-full text-sm font-bold"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 my-2 py-4">
          <div className="flex gap-3 mb-3">
            <FaRegCalendar size={"25px"} />
            <p>{event.duration}</p>
          </div>
          <div className="flex gap-3">
            <FaLocationDot size={"25px"} />
            <div className="flex items-center gap-2">
              <p>{event.location}</p>
              <FaChevronRight size={"12px"} />
            </div>
          </div>
        </div>
        {event.ticketTiers && (
          <EventTicketDetails ticketTiers={event.ticketTiers} />
        )}
        <div className="border-t border-gray-300 my-2 py-4">
          <p className="uppercase text-3xl font-bold mb-2">Description</p>
          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>
        <div className="border-t border-gray-300 my-2 py-5">
          <p className="uppercase text-3xl font-bold mb-2">Location</p>
          <div className="flex items-center gap-2 mb-2">
            <p>{event.location}</p>
            <FaChevronRight size={"12px"} />
          </div>
          <Image
            src={event.location_map}
            height={500}
            width={800}
            className="h-[500px] w-[800px] rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
