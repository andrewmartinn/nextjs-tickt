export interface EventTicketTier {
  id: number;
  name: string;
  price: string;
  isAvailable: boolean;
}

export interface EventOrganizer {
  name: string;
  logo: string;
}

export interface EventArtistLineup {
  name: string;
  artist_image: string;
}

export interface SelectedTicket {
  ticket: EventTicketTier;
  quantity: number;
}

export interface Event {
  id: number;
  name: string;
  venue: string;
  location: string;
  date: string;
  tags: string[];
  eventOrganizer: EventOrganizer;
  duration: string;
  ticketTiers: EventTicketTier[];
  description: string;
  artist_lineup?: EventArtistLineup[];
  image: string;
  location_map: string;
}
