import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-camru-black p-8 mt-8 max-w-screen-2xl mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="pb-2 md:pb-0">
            © 2024 Computing Alliance of Mount Royal University
          </p>
          <p className="flex h-8">
            <a
              href="https://instagram.com/computing_alliance_mru"
              className="mr-2"
            >
              <FaInstagram
                size="2rem"
                className="fill-gray-400 hover:fill-camru-blue transition ease-in-out delay-150"
              />
            </a>
            <a
              href="https://www.linkedin.com/groups/13951329/"
              className="mr-2"
            >
              <FaLinkedinIn
                size="2rem"
                className="fill-gray-400 hover:fill-camru-blue transition ease-in-out delay-150"
              />
            </a>
            <a href="https://discord.gg/SDdB7DwZYz" className="mr-2">
              <FaDiscord
                size="2rem"
                className="fill-gray-400 hover:fill-camru-blue transition ease-in-out delay-150"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
