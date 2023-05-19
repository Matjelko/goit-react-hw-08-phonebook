import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchContacts } from "redux/operations"
import { getError, getIsLoading } from "redux/selectors"

import ContactForm from "components/ContactForm/ContactForm"
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import LinearIndeterminate from "components/Loader/CircleLoader/LinearLoader/LinearLoader"

import { Typography } from "@mui/material"

export const ContactsPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return(
        <div className="container">
            <span className="header-contacts__phonebook"><Typography component="h1" variant="h4">Phonebook</Typography></span>
            <ContactForm/>
            
            <span className="header-contacts__contacts"><Typography component="h1" variant="h4" className="header-contacts">Contacts</Typography></span>
            <Filter/>
            {isLoading && !error 
                ? <div className="container__loader"><LinearIndeterminate/></div>
                : <ContactList/>
            }
        </div>
    )
}