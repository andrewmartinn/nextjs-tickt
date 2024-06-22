import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Event } from "@/libs/definitions";
import { formatDateString } from "@/libs/utils";

interface CarouselCardProps {
  event: Event;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      key={event.id}
      className="embla__slide h-full flex gap-10 "
    >
      <Image
        src={event.image}
        height="320"
        width="600"
        alt=""
        className="rounded-lg"
      />
      <div className="pt-10 px-2">
        <p className="text-xl font-bold">{event.name}</p>
        <div className="flex items-center gap-4 mt-1">
          <p className="font-bold">{event.venue}</p>
          <span className="text-xs">|</span>
          <p className="font-bold">{formatDateString(event.date)}</p>
        </div>
        <p className="mt-4">{event.description}</p>
      </div>
    </Link>
  );
};

export default CarouselCard;
