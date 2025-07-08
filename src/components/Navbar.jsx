import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleResumeDownload = () => {
    const resumeUrl = './fs40_405845_Sneha-Nahak_Resume.pdf';
    window.open(resumeUrl, '_blank');

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'fs40_405845_Sneha-Nahak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="navbar" id="nav-menu">
        <h1>Sneha.</h1>
        <ul className="nav-desktop">
          <li><NavLink to="/home" className="nav-link home" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/skills" className="nav-link skills" onClick={closeMenu}>Skills</NavLink></li>
          <li><NavLink to="/projects" className="nav-link projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/contact" className="nav-link contact" onClick={closeMenu}>Contact</NavLink></li>
          <li><button onClick={handleResumeDownload} className="nav-link resume resume-btn">Resume</button></li>
        </ul>

        <button onClick={toggleMenu} className="hamburger">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/home" className="nav-link home" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" className="nav-link skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" className="nav-link projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" className="nav-link contact" onClick={closeMenu}>Contact</NavLink>
          <button onClick={() => { handleResumeDownload(); closeMenu(); }} className="nav-link resume resume-btn">Resume</button>
        </div>
      )}
    </>
  );
};

export default Navbar;