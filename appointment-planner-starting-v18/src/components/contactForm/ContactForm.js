import React from "react";

export const ContactForm = ({
  contactName,
  setContactName,
  phone,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="contactName"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={phone}
        onChange={(e) => setPhoneNumber(e.target.value)}
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

      <button type="submit">Submit</button>
    </form>
  );
};

