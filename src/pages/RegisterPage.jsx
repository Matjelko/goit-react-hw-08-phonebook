import { RegisterForm } from "components/RegisterForm/RegisterForm"
import '../index.css'
import { Avatar, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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