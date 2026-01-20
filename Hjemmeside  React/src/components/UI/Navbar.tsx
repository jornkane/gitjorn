import React from "react";
import { Link } from "react-router-dom";
import "./../../css/Navbar.css";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li><Link to="/">Hjem</Link></li>
      <li><Link to="/IM">VG1-IM</Link></li>
      <li><Link to="/IT">VG2-IT</Link></li>
      <li><Link to="/AOIM">AO-IM</Link></li>
      <li><Link to="/git">Git</Link></li>
      <li><Link to="/pythonkurs">Pythonkurs</Link></li>
      <li><Link to="/mathplot">Mathplot</Link></li>
      <li><Link to="/link">Link</Link></li>
      <li><Link to="/ordlister">Ordlister</Link></li>
      <li><Link to="/kultur">🎸Kultur🎬</Link></li>

    </ul>
  </nav>
);

export default Navbar;
