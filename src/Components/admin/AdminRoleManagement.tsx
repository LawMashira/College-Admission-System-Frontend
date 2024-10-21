import React, { useState } from 'react';
import { changeUserRole } from '../../services/adminService';

const AdminRoleManagement = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleRoleChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await changeUserRole(username, role);
      setMessage('Role updated successfully!');
    } catch (error) {
      setMessage('Error updating role');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form onSubmit={handleRoleChange} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl mb-4 text-center">Change User Role</h2>
          <input
            className="mb-4 px-4 py-2 w-full"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="mb-4 px-4 py-2 w-full"
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
            Change Role
          </button>
          {message && <p className="mt-4 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminRoleManagement;
