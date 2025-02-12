import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables for contact info and duplicate check
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Handle form submission: add contact if not a duplicate and clear fields
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only add the contact if the name is not a duplicate and is not empty
    if (!isDuplicate && name.trim() !== "") {
      addContact(name, phone, email);
      // Clear the form fields after successful submission
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  // Using hooks, check for duplicate contact name in the contacts array (passed via props)
  useEffect(() => {
    const duplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(duplicate);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
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
