import { RegisterForm } from "components/RegisterForm/RegisterForm"

import { Avatar, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import '../index.css'

export const RegisterPage = () => {
    return(
        <div className="container">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <span className="sign"><Typography component="h1" variant="h5">Sign up</Typography></span>  
            <RegisterForm />
        </div>
    )
}