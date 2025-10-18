import React, { useState } from "react";
import "./Contacts.css";
import contactsSlice from "../../slices/contacts";
//import contactsInitialState from "../../data/contacts";
import "../../store";
import { useSelector, useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";

function Contacts() {
  let contacts = useSelector((state) => state.contacts);

  //state
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  //state for editing
  let [editid, setEditid] = useState(null);
  let [editFirstName, setEditFirstName] = useState("");
  let [editLastName, setEditLastName] = useState("");
  let [editEmail, setEditEmail] = useState("");
  let [editPhone, setEditPhone] = useState("");

  //create dispatch function
  let dispatch = useDispatch();

  // form validity: all fields must have non-empty (trimmed) values
  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "";

  let onAddClick = () => {
    console.log("Add button clicked"); 
    dispatch(contactsSlice.actions.add({
      id: uuidv1(),
      firstName,
      lastName,
      email,
      phone
    }));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  let onDeleteClick = (contact) => {
    if(window.confirm(`Are you sure you want to delete contact: ${contact.firstName}?`)) 
    {
      // proceed with delete
      console.log("Delete button clicked for id: ", contact.id);
      dispatch(contactsSlice.actions.remove(contact));
    }
  };
  let onEditClick = (contact) => {
    console.log("Edit button clicked for id: ", contact.id);
    setEditid(contact.id);
    setEditFirstName(contact.firstName);
    setEditLastName(contact.lastName);
    setEditEmail(contact.email);
    setEditPhone(contact.phone);
  };

  let onUpdateClick = () => {
    dispatch(contactsSlice.actions.update({
      id: editid,
      firstName: editFirstName,
      lastName: editLastName,
      email: editEmail,
      phone: editPhone
    }));
    setEditid(null);
  };

  return (
    <div className="container">
      <h4 className="grid-header">Contacts</h4>
      <div className="box">
        <details>
          <summary>New Contact</summary>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="FirstName" value={firstName} onChange={(event)=> {setFirstName(event.target.value)}}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="LastName" value={lastName} onChange={(event)=> {setLastName(event.target.value)}}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="email" value={email} onChange={(event)=> {setEmail(event.target.value)}}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(event)=> {setPhone(event.target.value)}}/>
          </div>
          <button className="button button-green" onClick={onAddClick} disabled={!isFormValid}>Add Contact</button>
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
                {contacts.map((contact, index) => (
                    <tr key={contact.id}>
                        <td>{index + 1}</td>
                        <td>{editid === contact.id ? <input type="text" placeholder="First Name" className="form-control" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} /> : contact.firstName}</td>
                        <td>{editid === contact.id ? <input type="text" placeholder="Last Name" className="form-control" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} /> : contact.lastName}</td>
                        <td>{editid === contact.id ? <input type="text" placeholder="Email" className="form-control" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : contact.email}</td>
                        <td>{editid === contact.id ? <input type="text" placeholder="Phone" className="form-control" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} /> : contact.phone}</td>
                        <td>
                          {editid === contact.id ?
                            <button className="button button-green" onClick={() => {
                              // Dispatch update action here (not implemented in reducer yet)
                              setEditid(null); onUpdateClick();
                            }}>Update</button>
                            : <button className="button button-blue" onClick={() => onEditClick(contact)}>Edit</button>
                          }
                            <button className="button button-red" onClick={() => onDeleteClick(contact)}>Delete</button>
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
