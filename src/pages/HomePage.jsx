import { Typography } from '@mui/material'
import '../index.css'

export const HomePage = () => {
    return(
        <div className='container'>
            <Typography component="h1" variant="h4">This is HomePage!</Typography>
        </div>
    // <div className="container">
    //     <h1 className="header--phonebook">Phonebook</h1>
    //     <ContactForm/>
        
    //     <h2 className="header-contacts">Contacts</h2>
    //     <Filter/>
    //     <ContactList/>

    //     {isLoading && !error 
    //         ? <h4>Request in progress...</h4>
    //         : <ContactList/>
    //     }

    // </div>
    )
}