"use client";
import Autoplay from "embla-carousel-autoplay";
import CarouselCard from "./CarouselCard";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Event } from "@/libs/definitions";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="embla mt-8 w-full ">
      <div className="embla__viewport overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex">
          {events.map((evt) => (
            <CarouselCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>
      <button
        className="embla__prev absolute left-[100px] top-[400px] transform -translate-y-24 z-10"
        onClick={scrollPrev}
      >
        <MdArrowLeft size="32px" />
      </button>
      <button
        className="embla__next absolute right-[100px] top-[400px]  transform -translate-y-24"
        onClick={scrollNext}
      >
        <MdArrowRight size="32px" />
      </button>
    </div>
  );
};
export default EventsCarousel;
