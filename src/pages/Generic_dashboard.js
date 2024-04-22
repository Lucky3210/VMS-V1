import React, { useState } from 'react'
import Header from '../components/Header'

const Generic_dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '', lastname: '', phone: null, reason: '', host: '', department: 'Marketing', email: '', organization: ''
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFormData({firstname: '', lastname: '', phone: null, reason: '', host: '', department: 'Marketing', email: '', organization: ''});
}

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form data here (e.g., send to a server, perform validation)
    console.log('Form data:', formData);

    handleClose(); // Close the popup after submission
  };

    const apidata = [
        { 
            name: "Adoyiza", 
            phone: 12345678, 
            reason: "Personal", 
            host: "Ashley",
            department: "Innovation",
            email: "Ado@nigcomsat.ng",
            organization: "Covenant University"
        },
        {
            name: "Alameen", 
            phone: 98764532, 
            reason: "Official", 
            host: "Maureen",
            department: "Innovation",
            email: "Alameen@nigcomsat.ng",
            organization: "Bayero University"
        }
    ]

  return (
    <div>
      <Header />

      <div>
        <div>
            <button>Waiting List</button>
            <button>Approved List</button>
        </div>

        <div>
            <form>
                <input type='search' placeholder='Search by Name or Phone number'/>
            </form>
        </div>
      </div>

      <div>
        <button onClick={handleOpen}>Schedule a visit</button>
        { isOpen && 
        <div>
            <div>
                <h2>New Visitor Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <p>Visitor Details</p>
                <button onClick={handleClose} >Close form</button>
                <label>First Name</label>
                <input type='text' name='firstname' value={formData.firstname} placeholder='First Name' onChange={handleChange} required />

                <label>Last Name</label>
                <input type='text' name='lastname' value={formData.lastname} placeholder='Last Name' onChange={handleChange} required />

                <label>Phone Number</label>
                <input type='tel' name='phone' value={formData.phone} placeholder='Phone Number' onChange={handleChange} required />

                <label>Email</label>
                <input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} required />

                <label>Organization</label>
                <input type='text' name='organization' value={formData.organization} placeholder='Organization' onChange={handleChange} />

                <p>Staff Details</p>

                <label>Whom To See</label>
                <input type='text' name='host' value={formData.host} placeholder='Full Name' onChange={handleChange} />

                <label>Department</label>
                <input type='text' name='department' value={formData.department} onChange={handleChange} />

                <label>Reason</label>
                <input type='text' name='reason' value={formData.reason} placeholder='Excursion | Personal | Marketing | Official | Others...' onChange={handleChange} required />

                <button type='submit'>Schedule a visit</button>
            </form>
        </div> }
      </div>

      <div>
        <table>
            <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Reason</th>
                <th>Whom To See</th>
                <th>Department</th>
                <th>Email</th>
                <th>Organization Represented</th>
            </tr>
            </thead>

            <tbody>
            { apidata.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{val.name}</td>
                        <td>{val.phone}</td>
                        <td>{val.reason}</td>
                        <td>{val.host}</td>
                        <td>{val.department}</td>
                        <td>{val.email}</td>
                        <td>{val.organization}</td>
                    </tr>
                )
            }) }
            </tbody>
            

        </table>
      </div>
    </div>
  )
}

export default Generic_dashboard
