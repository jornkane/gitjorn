import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle =
  "px-3 py-2 rounded-md font-semibold text-sm md:text-base transition-all duration-200";

const activeStyle =
  "bg-white/20 text-yellow-300 shadow";

const normalStyle =
  "text-white hover:bg-white/10 hover:text-yellow-200";

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-20 w-full backdrop-blur-md bg-black/70 shadow-lg">
    <ul className="flex flex-wrap items-center gap-2 md:gap-3 px-3 py-2">
      {[
        { to: "/", label: "Hjem" },
        { to: "/IM", label: "VG1-IM" },
        { to: "/IT", label: "VG2-IT" },
        { to: "/AOIM", label: "AO-IM" },
        { to: "/git", label: "Git" },
        { to: "/pythonkurs", label: "Pythonkurs" },
        { to: "/mathplot", label: "Mathplot" },
        { to: "/link", label: "Link" },
        { to: "/ordlister", label: "Ordlister" },
        { to: "/kultur", label: "🎸 Kultur 🎬" },
      ].map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : normalStyle}`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
