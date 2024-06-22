import { Event } from "./definitions";

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch("http://localhost:5000/events");
    if (!response.ok) {
      throw new Error("Failed to fetch events!");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data!");
  }
};

export const fetchEventsById = async (id: string): Promise<Event> => {
  try {
    const response = await fetch(`http://localhost:5000/events/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch events!");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data!");
  }
};
