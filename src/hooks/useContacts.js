import { useState } from "react";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (c) =>
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === id ? { ...c, ...updatedContact } : c))
    );
  };

  return {
    contacts: filteredContacts,
    addContact,
    updateContact,
    search,
    setSearch,
  };
}
