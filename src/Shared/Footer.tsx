import Link from "next/link";
import {
  FaDiscord,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-zinc-300">
      <footer className="container mx-auto px-5 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <aside className="text-center lg:text-left">
            <Link
              href="/"
              className="text-2xl sm:text-3xl text-[#bed6ff] uppercase font-bold"
            >
              Green House
            </Link>
          </aside>

          {/* Social Links */}
          <aside className="text-center lg:text-left">
            <h3 className="text-xl text-white border-b pb-1 uppercase font-primary tracking-widest">
              Social
            </h3>
            <div className="flex justify-center lg:justify-start gap-5 text-3xl mt-3">
              <a
                href="https://www.linkedin.com/in/shajim-ahmed/"
                className="hover:text-white transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://discord.com/channels/shajim_ahmed"
                className="hover:text-white transition-transform transform hover:scale-110"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.instagram.com/shajim_78/#"
                className="hover:text-white transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </aside>

          {/* Navigation */}
          <aside className="text-center lg:text-left">
            <h3 className="text-xl text-white border-b pb-1 uppercase font-primary tracking-widest">
              Menu
            </h3>
            <div className="flex flex-col mt-4 space-y-2">
              <Link className="hover:text-white transition" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-white transition" href={"/shop"}>
                Vehicles
              </Link>
              <Link className="hover:text-white transition" href={"/movies"}>
                About us
              </Link>
              <Link className="hover:text-white transition" href={"/blogs"}>
                Blogs
              </Link>
            </div>
          </aside>

          {/* Contact Information */}
          <aside className="text-center lg:text-left">
            <h3 className="text-xl text-white border-b pb-1 uppercase font-primary tracking-widest">
              Say Hello
            </h3>
            <div className="mt-4 space-y-3">
              <h3 className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition">
                <FaGoogle className="text-2xl" /> ajshajimmax@gmail.com
              </h3>
              <h3 className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition">
                <FaWhatsapp className="text-2xl" /> +8801741942510
              </h3>
              <h3 className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition">
                <MdLocationOn className="text-2xl" /> Narsingdi, Bangladesh
              </h3>
            </div>
          </aside>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="container mx-auto px-5 pb-6 text-center">
        <hr className="border-gray-600" />
        <p className="pt-4 text-sm">
          <span className="text-[#bed6ff] font-bold">Inoske</span> ©{" "}
          {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
