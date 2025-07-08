import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        <div className="education-card">
          <h3>Intermediate in Science</h3>
          <p><strong>Vidwan Secondary School</strong></p>
          <p>Jeypore,Odisha</p>
          <p>March-2019 to March-2021</p>
        </div>

        <div className="education-card">
          <h3>B.Sc. in Physics</h3>
          <p><strong>Vikram Deb University</strong></p>
          <p>Jeypore,Odisha</p>
          <p>November-2021 to May-2024</p>
        </div>

        <div className="education-card">
          <h3>Full Stack Web Development</h3>
          <p><strong>Masai School</strong></p>
          <p>Bengaluru, Karnataka</p>
          <p>September-2024 to May-2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
