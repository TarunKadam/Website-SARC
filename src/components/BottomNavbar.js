// src/components/BottomNavbar.js
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default BottomNavbar;
