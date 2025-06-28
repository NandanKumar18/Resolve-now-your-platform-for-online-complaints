import React, { useState } from 'react';

function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered successfully!');
    onRegister(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Name" required onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" type="email" required onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" required onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
