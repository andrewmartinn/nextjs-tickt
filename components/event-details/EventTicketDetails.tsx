"use client";
import TicketsSummary from "./TicketsSummary";
import { EventTicketTier, SelectedTicket } from "@/libs/definitions";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

interface EventTicketDetailsProps {
  ticketTiers: EventTicketTier[];
}

const EventTicketDetails = ({ ticketTiers }: EventTicketDetailsProps) => {
  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket[]>([]);
  const handleAddTicket = (ticket: EventTicketTier) => {
    setSelectedTicket((prevTickets) => {
      const exisitingTicketIndex = prevTickets.findIndex(
        (t) => t.ticket.id === ticket.id
      );

      if (exisitingTicketIndex !== -1) {
        const updatedTickets = [...prevTickets];
        updatedTickets[exisitingTicketIndex] = {
          ...updatedTickets[exisitingTicketIndex],
          quantity: updatedTickets[exisitingTicketIndex].quantity + 1,
        };
        return updatedTickets;
      } else {
        return [...prevTickets, { ticket, quantity: 1 }];
      }
    });
  };
  const handleRemoveTicket = (ticket: EventTicketTier) => {
    setSelectedTicket((prevTickets) => {
      const existingTicketIndex = prevTickets.findIndex(
        (t) => t.ticket.id === ticket.id
      );

      if (existingTicketIndex !== -1) {
        const updatedTickets = [...prevTickets];
        if (updatedTickets[existingTicketIndex].quantity > 1) {
          updatedTickets[existingTicketIndex] = {
            ...updatedTickets[existingTicketIndex],
            quantity: updatedTickets[existingTicketIndex].quantity - 1,
          };
        } else {
          updatedTickets.splice(existingTicketIndex, 1);
        }
        return updatedTickets;
      } else {
        return prevTickets;
      }
    });
  };
  return (
    <div className="border-t border-gray-300 my-2 py-4">
      <p className="uppercase text-3xl font-bold mb-2">Tickets</p>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {ticketTiers.map((ticket, index) => (
            <div key={index}>
              {ticket.isAvailable ? (
                <div className="bg-white text-black rounded-lg mb-4 p-4">
                  <div className="flex justify-between items-center">
                    <p className=" text-xl font-bold mb-5">{ticket.name}</p>
                    <div className="flex items-center gap-3">
                      <FaMinus
                        className="bg-[#CC624B] p-1 rounded-full cursor-pointer"
                        size={"22px"}
                        onClick={() => handleRemoveTicket(ticket)}
                      />
                      <p>
                        {selectedTicket.find((t) => t.ticket.id === ticket.id)
                          ?.quantity || 0}
                      </p>
                      <FaPlus
                        className="bg-[#CC624B] p-1 rounded-full cursor-pointer"
                        size={"22px"}
                        onClick={() => handleAddTicket(ticket)}
                      />
                    </div>
                  </div>
                  <p className="text-sm font-bold">{ticket.price}</p>
                </div>
              ) : (
                <div className="bg-white opacity-70 text-black rounded-lg mb-4 p-4">
                  <div className="flex justify-between items-center">
                    <p className=" text-xl font-bold mb-5">{ticket.name}</p>
                    <div className="flex items-center gap-3"></div>
                  </div>
                  <p className="text-sm font-bold">{ticket.price}</p>
                  <div className="flex justify-end">
                    <div className="bg bg-[#CC624B] px-3 py-1 text-white rounded-lg text-sm ">
                      Sold Out
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {selectedTicket.length > 0 && (
          <TicketsSummary selectedTicket={selectedTicket} />
        )}
      </div>
    </div>
  );
};
export default EventTicketDetails;
