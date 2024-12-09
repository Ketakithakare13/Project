import React, { useState } from 'react';
import './styles.css';

const initialUsers = [
  { id: 1, name: 'Smith Patil', email: 'smith@gmail.com' },
  { id: 2, name: 'Harsh Jadhav', email: 'harsh@gmail.com' },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="users-container">
      <h2 className="users-heading">Users</h2>
      <table className="table users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
