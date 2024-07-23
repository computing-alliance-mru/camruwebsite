import camru_logo from "../public/logo-01.svg";
import Image from "next/image";
import Link from "next/link";

import { FaDiscord } from "react-icons/fa";

export default function NavMenu() {
  return (
    <nav className="flex justify-between align-middle max-w-screen-2xl m-auto">
      <Image
        src={camru_logo}
        alt="CAMRU Logo"
        className="h-24 w-24 md:h-36 md:w-36 p-5"
      />
      <div className="flex-grow flex-col flex align-middle justify-center">
        <ul className="h-fit flex justify-end gap-5 px-5">
          <li className="h-8 leading-4 py-2 px-5 font-semibold cursor-pointer">
            Home
          </li>          
          <li className="h-8 leading-4 py-2 px-5 font-semibold cursor-pointer">
            <a href="#sponsors">Sponsors</a>
          </li>
          <Link href="https://discord.gg/SDdB7DwZYz">
            <li className="h-8 leading-4 py-2 px-5 rounded-md bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold cursor-pointer flex flex-row align-middle transition-all">
              <FaDiscord className="inline-block mr-2" size={18} />
              Join Us!
            </li>
          </Link>            

        </ul>
      </div>
    </nav>
  );
}
