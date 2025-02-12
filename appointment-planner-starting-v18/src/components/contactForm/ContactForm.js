import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="phone">Phone:</label>
      <input 
        type="tel" 
        id="phone"
        value={phone} 
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />

      <button type="submit">Add Contact</button>
    </form>
  );
};
