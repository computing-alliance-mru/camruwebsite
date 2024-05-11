import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function CTA() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold font-space mb-4 text-camru-blue">
        Ready to join us?
      </h1>
      <Link href="https://discord.gg/SDdB7DwZYz">
        <div className="leading-4 py-4 px-10 rounded-md bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold cursor-pointer flex flex-row align-middle justify-center transition-all">
          <FaDiscord className="inline-block mr-2" size={32} />
          <p className="text-2xl">Join our Discord!</p>
        </div>
      </Link>
    </div>
  );
}
