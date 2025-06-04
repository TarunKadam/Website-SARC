import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
     
      <div
  className="logo"
  style={{
    color: 'brown',
    fontFamily: 'Arial', 
    fontSize: '28px',
    fontWeight: 'bold',
    fontStyle: 'italic' 
  }}
>
  SolarForce
  <div className="logo" style={{ color: 'gray',
  fontFamily: 'Arial', 
    fontSize: '10px',
    
     

  }}>Innovation For Social Cause</div>
</div>



      <ul className="nav-links">
        <li><Link to="/home" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/services" className="nav-link">Services ▼</Link>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><Link to="/products" className="dropdown-item">Products</Link></li>
            <li><Link to="/projects" className="dropdown-item">Projects</Link></li>
          </ul>
        </li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
