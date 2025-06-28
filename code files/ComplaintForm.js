import React, { useState } from 'react';

function ComplaintForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Complaint</h3>
      <textarea required value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplaintForm;
