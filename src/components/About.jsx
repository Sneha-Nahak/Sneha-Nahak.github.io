import React from "react";
import "./About.css";
import profilePic from "../assets/Pass-Photo.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        <div className="home-image">
          <img src={profilePic} alt="Your Name" />
        </div>
        <div className="about-description">
          <p>
            Hi, I'm{" "}
            <span id="user-detail-name">
              <strong>Sneha Nahak</strong>
            </span>
            ,
            <span id="user-detail-intro">
              {" "}
              a passionate full-stack developer who enjoys crafting beautiful
              and functional web experiences, currently pursuing Full Stack
              development from Masai School as my secondary education after
              graduating with a BSc Physics Degree. I specialize in React,
              modern UI/UX, and creating responsive, user-friendly designs.
            </span>
          </p>
          <p>
            When I'm not coding, you'll find me exploring new tech, contributing
            to open-source or exploring some artistic perspectives of design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
