import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: '', email: '', role: 'Energy Manager' });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Notification state
  const [notification, setNotification] = useState({ visible: false, message: '', progress: 0 });

  const roles = ['Energy Manager', 'Network Engineer', 'System Administrator'];

  // Generate a random password
  const generatePassword = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send an email using EmailJS
  const sendEmail = (user) => {
    const password = generatePassword(); // Generate password

    // Email template parameters
    const templateParams = {
      name: user.name,
      id: user.id,
      email: user.email,
      password: password,
      to_email: user.email,
      role: user.role,
    };

    // Send email with EmailJS
    emailjs
      .send('service_zcdn093', 'template_82spvwg', templateParams, 'DPLyb9V3-xZo_kR09')
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  const addUser = () => {
    if (!formData.name || !formData.email) return;

    const newUser = { ...formData, id: Date.now() };
    setUsers([...users, newUser]);
    setFormData({ id: null, name: '', email: '', role: 'Energy Manager' });

    // Trigger notification
    showNotification('New user added successfully!');
    sendEmail(newUser); // Send welcome email
    setLoading(false);
  };

  // Edit an existing user
  const editUser = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const updateUser = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setFormData({ id: null, name: '', email: '', role: 'Energy Manager' });
    setIsEditing(false);
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const showNotification = (message) => {
    setNotification({ visible: true, message, progress: 0 });

    // Simulate progress
    const interval = setInterval(() => {
      setNotification((prev) => {
        if (prev.progress >= 100) {
          clearInterval(interval);
          return { ...prev, visible: false }; // Hide notification
        }
        return { ...prev, progress: prev.progress + 10 };
      });
    }, 200); // Increase progress every 200ms
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>

      {/* Notification Pop-Up */}
      {notification.visible && (
        <div className="fixed top-4 right-4 bg-purple-500 text-white p-4 rounded shadow-lg">
          <p>{notification.message}</p>
          <div className="w-full bg-gray-200 rounded h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${notification.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* User Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border rounded p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border rounded p-2 mr-2"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="border rounded p-2 mr-2"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <button
          onClick={isEditing ? updateUser : addUser}
          className="bg-purple-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Adding...' : isEditing ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* User List */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => editUser(user)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
