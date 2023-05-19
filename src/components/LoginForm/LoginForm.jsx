import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm } from './LoginForm.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <TextField
                required
                id="outlined-required"
                label="Email"
                type="email"
                name="email"
            />

            <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                name="password"
            />
            <Button variant="contained" type="submit">
                Log In
            </Button>
        </StyledForm>
    );
};
