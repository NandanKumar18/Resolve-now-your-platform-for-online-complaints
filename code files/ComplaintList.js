import React from 'react';

function ComplaintList({ complaints }) {
  return (
    <div>
      <h3>My Complaints</h3>
      <ul>
        {complaints.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComplaintList;
