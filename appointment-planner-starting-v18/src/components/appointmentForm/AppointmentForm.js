import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Title Input */}
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      {/* Contact Picker Dropdown */}
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
      <br />

      {/* Date Input */}
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <br />

      {/* Time Input */}
      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <br />

      <button type="submit">Add Appointment</button>
    </form>
  );
};
