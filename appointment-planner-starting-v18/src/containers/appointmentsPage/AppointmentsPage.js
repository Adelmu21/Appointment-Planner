import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
 const [ name, setName ] = useState("");
 const [ contact, setContact ] = useState("");
 const [ date, setDate ] = useState("");
 const [ time, setTime ] = useState("");
 const [ title, setTitle ] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    // Add a new appointment using the callback function
    addAppointment(title, name, contact, date, time);

    // Clear form data
    setName("");
    setContact("");
    setDate("");
    setTime("");
    setTitle("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          // name={name}
          // setName={setName}
          // contact={contact}
          // setContact={setContact}
          // date={date}
          // setDate={setDate}
          // time={time}
          // setTime={setTime}
          // handleSubmit={handleSubmit}
          // contacts={contacts}
          title={title} // Pass the title state here
          setTitle={setTitle}
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );

};