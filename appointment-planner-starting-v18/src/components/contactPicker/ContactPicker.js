import React from "react";

export const ContactPicker = ({ contacts, onChange, value, required }) => {

  return (
    <select onChange={onChange} value={value} required={required}>
      <option value="">No contact selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
