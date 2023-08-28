import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"; // Import the ContactPicker component

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
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <br />

      <label htmlFor="contact">Contact:</label>
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};
