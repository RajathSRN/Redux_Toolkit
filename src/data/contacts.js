import {v1 as uuid} from 'uuid';

let contactsInitialState = [
    {id: uuid(), firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890'},
    {id: uuid(), firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '987-654-3210'},
    {id: uuid(), firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', phone: '555-555-5555'},
    {id: uuid(), firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', phone: '444-444-4444'},
    {id: uuid(), firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', phone: '333-333-3333'}
];

export default contactsInitialState;