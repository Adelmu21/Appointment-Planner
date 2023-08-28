import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [contactName, setContactName] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicate, setIsDuplicate] = useState(false);

 useEffect(() => {
  // Check for duplicate contact names in the contacts array
  setIsDuplicate(contacts.some(contact => contact.name === contactName));
}, [contactName, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   // Check if the contact name is not a duplicate
   if (!isDuplicate) {
    // Call the callback function to add a new contact
    addContact(contactName, phoneNumber, email);

    // Clear input fields
    setContactName("");
    setPhoneNumber("");
    setEmail("");
  }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contactName={contactName}
          setContactName={setContactName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
