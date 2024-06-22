"use client";
import EventsGrid from "@/components/events-home/EventsGrid";
import Link from "next/link";
import { Event } from "@/libs/definitions";
import { fetchEvents } from "@/libs/events";
import { IoClose } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchResults, setSearchResults] = useState<Event[]>([]);
  const handleSearch = useDebouncedCallback(async (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      const results: Event[] = await fetchEvents();
      const filteredEvents = results.filter((event) =>
        event.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      setSearchResults(filteredEvents);
    } else {
      params.delete("query");
      setSearchResults([]);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="container mx-auto bg-gray-800 px-[4rem] py-[2rem] rounded-lg text-white min-h-screen">
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl">Search for events</p>
        <Link href="/">
          <IoClose size={"30px"} className="bg-[#CC624B] p-1 rounded-full" />
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search events..."
          className="w-full mt-4 p-2 rounded-lg text-gray-600 outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="mt-[4rem]">
        {searchResults && <EventsGrid events={searchResults} />}
      </div>
    </div>
  );
};
export default Search;
