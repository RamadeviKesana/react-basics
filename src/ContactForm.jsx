// App.js
import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
  
    if (!firstName || !lastName || !email || !phoneNumber) {
      setMessage("❗ Please fill out all the fields");
      return;
    }
  
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setMessage("❗ Names should only contain alphabet characters");
      return;
    }
  
    if (!emailRegex.test(email)) {
      setMessage("❗ Please enter a valid email address");
      return;
    }
  
    if (!phoneRegex.test(phoneNumber)) {
      setMessage("❗ Phone number must be 10 digits");
      return;
    }
  
    // Success - clear fields
    setMessage("✅ Thanks for submitting the form!");
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
  
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  

  return (
    <div className="container">
      <div className="card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
