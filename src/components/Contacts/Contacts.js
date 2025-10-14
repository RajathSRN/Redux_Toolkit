import React from "react";
import "./Contacts.css";
import contactsInitialState from "../../data/contacts";

function Contacts() {
  return (
    <div className="container">
      <h4 className="grid-header">Contacts</h4>
      <div className="box">
        <details>
          <summary>New Contact</summary>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="FirstName" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="LastName" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <button className="button button-green">Add Contact</button>
        </details>
      </div>
      <div className="grid-container">
        <table className="grid">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contactsInitialState.map((contact, index) => (
                    <tr key={contact.id}>
                        <td>{index + 1}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button className="button button-red">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
