import EventsCarousel from "@/components/events-home/EventsCarousel";
import EventsGrid from "@/components/events-home/EventsGrid";
import { Event } from "@/libs/definitions";
import { fetchEvents } from "@/libs/events";

const Home = async () => {
  const events: Event[] = await fetchEvents();
  return (
    <div className="container mx-auto px-[5rem] py-[1rem] ">
      <div className="flex items-center gap-8">
        <p className="font-bold text-4xl">Events in UAE</p>
        <div className="flex items-center gap-3">
          <span className="text-sm">|</span>
          <p className="text-md">{events.length} events</p>
        </div>
      </div>
      {events && <EventsCarousel events={events} />}
      <div className="mt-[6rem] mb-[2rem] bg-[rgba(237,226,226,0.2)] shadow-lg inline-block text-2xl font-bold p-2 uppercase">
        <p>Today</p>
      </div>
      {events && <EventsGrid events={events} />}
    </div>
  );
};
export default Home;
