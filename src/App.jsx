import { useContacts } from "./hooks/useContacts";
import AddContactForm from "./components/AddContactForm";
import ContactTable from "./components/ContactTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const { contacts, addContact, updateContact, search, setSearch } = useContacts();

  return (
    <div className="App">
      <h1>Address Book</h1>
      <AddContactForm onAdd={addContact} />
      <SearchBar search={search} setSearch={setSearch} />
      <ContactTable contacts={contacts} onUpdate={updateContact} />
    </div>
  );
}
