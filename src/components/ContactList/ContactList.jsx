import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import PropTypes from 'prop-types';
import './ContactList.css'
import { Button, ListItemButton, Typography } from '@mui/material';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const showContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }

    return(
        <ul className="contactList__unordered-list">
            {showContacts.map(contact => {
                return(
                    <li key={contact.id} className='contactList__unordered-list--item'>
                        <Typography>{contact.name} : {contact.number}</Typography>
                        <div className='contactList__unordered-list--button'>
                            <Button variant='outlined' size='small' type='button' id={contact.id} onClick={() => handleDelete(contact.id)}>
                                Delete
                            </Button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    handleDelete: PropTypes.func
}

export default ContactList