import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "1rem"}}>
      © {new Date().getFullYear()} Sneha Portfolio Website. All rights reserved.
    </footer>
  );
};

export default Footer;