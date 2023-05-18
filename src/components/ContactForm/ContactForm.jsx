import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";

import PropTypes from 'prop-types';
import './ContactForm.css'
import { getContacts } from "redux/selectors";
import { Alert, Button, TextField, Typography } from "@mui/material";

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;

        let switching = false;

        contacts.forEach(el => {
            if(el.name.toLowerCase() === name.toLowerCase()){
                switching = true;
            }
        });

        if(switching){
            alert(`${name} is already in contacts.`)
        }
        else{
            dispatch(addContact({ 
                name: evt.target.elements.name.value, 
                number: evt.target.elements.number.value
            }));
        }
        form.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <Typography>Name</Typography>
            <TextField
                size="small"
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={evt => setName(evt.target.value)}
            />
            <span className="contactForm_margin"><Typography>Number</Typography></span>
            <TextField
                size="small"
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={evt => setNumber(evt.target.value)}
            />
            <div className="contactForm__button--center">
                <Button variant="contained" type="submit" className="contactForm__button">Add Contact</Button>
            </div>
            {/* <button className="contactForm__button" type="submit">Add Contact</button> */}
        </form>
    )
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default ContactForm