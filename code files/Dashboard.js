import React, { useState } from 'react';
import ComplaintForm from './ComplaintForm';
import ComplaintList from './ComplaintList';

function Dashboard({ user }) {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (newComplaint) => {
    setComplaints([...complaints, newComplaint]);
  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <ComplaintForm onSubmit={addComplaint} />
      <ComplaintList complaints={complaints} />
    </div>
  );
}

export default Dashboard;
