import { useState } from "react";

export default function ContactTable({ contacts, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (contact) => {
    setEditId(contact.id);
    setEditData(contact);
  };

  const handleSave = () => {
    if (!editData.firstName || !editData.lastName || !editData.phone) {
      alert("Fields cannot be empty");
      return;
    }
    onUpdate(editId, editData);
    setEditId(null);
  };

  if (contacts.length === 0) {
    return <p>No data to display.</p>;
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>
              {editId === c.id ? (
                <input
                  value={editData.firstName}
                  onChange={(e) =>
                    setEditData({ ...editData, firstName: e.target.value })
                  }
                />
              ) : (
                c.firstName
              )}
            </td>
            <td>
              {editId === c.id ? (
                <input
                  value={editData.lastName}
                  onChange={(e) =>
                    setEditData({ ...editData, lastName: e.target.value })
                  }
                />
              ) : (
                c.lastName
              )}
            </td>
            <td>
              {editId === c.id ? (
                <input
                  value={editData.phone}
                  onChange={(e) =>
                    setEditData({ ...editData, phone: e.target.value })
                  }
                />
              ) : (
                c.phone
              )}
            </td>
            <td>
              {editId === c.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={() => handleEdit(c)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
