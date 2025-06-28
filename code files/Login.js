import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in!');
    onLogin({ name: 'Test User', email });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" type="email" required onChange={e => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
