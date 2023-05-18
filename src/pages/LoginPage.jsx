import { LoginForm } from "components/LoginForm/LoginForm"
import '../index.css'
import { Avatar, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const LoginPage = () => {
    return(
        <div className="container">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>  
            <span className="sign"><Typography component="h1" variant="h5">Sign in</Typography></span>
            <LoginForm />
        </div>
    )
}