import React, { useState } from 'react';
import '../App.css'

function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Add your form field names and initial values here
    name: '',
    email: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form data here (e.g., send to a server, perform validation)
    console.log('Form data:', formData);

    handleClose(); // Close the popup after submission
  };

  return (
    <div className="container">
      <button onClick={handleOpen}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <button type="submit">Submit</button>
          </form>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default PopupForm;