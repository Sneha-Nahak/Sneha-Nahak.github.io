import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_x8bqd55',
      'template_anf6hao',
      formRef.current,
      'ydZ7L8ppRLWT7-b91'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-info">
        <p id='contact-email'><MdEmail /> <strong>Email:</strong> snehanahak6@gmail.com</p>
        <p id='contact-phone'><FiPhone /> <strong>Phone:</strong> +91 784 786 7991</p>
        <p id='contact-linkedin'>
          <FaLinkedin /> <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/sneha-nahak-s3/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/sneha-nahak-s3/
          </a>
          </p>
          <p id='contact-github'>
          <FaGithub /> <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Sneha-Nahak" target="_blank" rel="noopener noreferrer">
          https://github.com/Sneha-Nahak
          </a>
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
