import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <div>
      <label htmlFor="contact">Contact:</label>
      <select
        id="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      >
        <option value="">Select a contact</option>
        {contacts.map((contactItem, index) => (
          <option key={index} value={contactItem.name}>
            {contactItem.name}
          </option>
        ))}
      </select>
    </div>
  );
};
