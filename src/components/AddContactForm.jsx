import { useState } from "react";
import "./Form.css";

export default function AddContactForm({ onAdd }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "The first name is required";
    if (!form.lastName) newErrors.lastName = "The last name is required";
    if (!form.phone) newErrors.phone = "The phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd(form);
      setForm({ firstName: "", lastName: "", phone: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        name="firstName"
        placeholder="First name"
        value={form.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <input
        name="lastName"
        placeholder="Last name"
        value={form.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}
