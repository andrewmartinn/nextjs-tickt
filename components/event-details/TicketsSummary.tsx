import { SelectedTicket } from "@/libs/definitions";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface TicketsSummaryProps {
  selectedTicket: SelectedTicket[];
}

const TicketsSummary = ({ selectedTicket }: TicketsSummaryProps) => {
  const ticketsTotal = selectedTicket.reduce((acc, curr) => {
    return acc + parseFloat(curr.ticket.price) * curr.quantity;
  }, 0);
  return (
    <div className="bg-white rounded-lg text-black mb-2">
      {selectedTicket.map((t) => (
        <div key={t.ticket.id}>
          <p className="font-bold text-xl px-4 py-1">x {t.quantity}</p>
          <p className="font-bold text-xl px-4 py-1">Selected items</p>
          <div className="bg-gray-300 px-4 py-1">
            <div className=" flex justify-between items-center">
              <p>x {t.quantity}</p>
              <p>{t.ticket.price}</p>
            </div>
            <p>{t.ticket.name}</p>
          </div>
          <div className="flex justify-between px-4 py-2">
            <p className="font-bold">Sub Total</p>
            <p className="font-bold">${ticketsTotal}.00</p>
          </div>
          <div className="flex gap-3 items-center px-4 py-2">
            <AiOutlineExclamationCircle className="text-gray-500" />
            <p className="font-bold text-gray-500 text-sm">
              Excluding Service Fees
            </p>
          </div>
          <div className="px-4 py-2">
            <button className="py-2 w-full bg-gradient-to-r from-fc6767 to-ec008c text-white font-bold rounded-lg shadow-md bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
              Next
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TicketsSummary;
