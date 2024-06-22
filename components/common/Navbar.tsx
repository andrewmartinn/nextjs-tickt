import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto px-2 py-5 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-2xl font-bold">
            tickt
          </Link>
          <Link href="/search">
            <IoSearchOutline
              size={"35px"}
              className="bg-[rgba(237,226,226,0.2)] shadow-lg p-2 rounded-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-900 text-white text-sm  px-[22px] py-[10px] rounded-full">
            Organizer
          </button>
          <button className="bg-gray-900 text-white text-sm font-bold px-[20px] py-[10px] rounded-full">
            <LuUser2 size={"18px"} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
