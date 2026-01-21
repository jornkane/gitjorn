import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div id="meny" className="bg-black text-yellow-300 p-4 flex">
      <Link to="/" className="mr-4 text-lg">
        Hjem
      </Link>
      <Link to="/IM" className="mr-4 text-lg">
        VG1-IM
      </Link>
      <Link to="/IT" className="mr-4 text-lg">
        VG2-IT
      </Link>
      <Link to="/1AO8" className="mr-4 text-lg">
        AO-IM
      </Link>
      <Link to="/kurs" className="mr-4 text-lg">
        Kurs
      </Link>
      <Link to="/linker" className="mr-4 text-lg">
        Links
      </Link>
      <Link to="/ordlister" className="mr-4 text-lg">
        Ordlister
      </Link>
      <Link to="/kultur" className="mr-4 text-lg">
        Kultur
      </Link>
    </div>
  );
};

export default Navbar;
