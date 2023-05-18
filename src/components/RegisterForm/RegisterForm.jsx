import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <TextField
                required
                id="outlined-required"
                label="Username"
                type="text"
                name="name"
            />
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

            <Button type="submit" variant="contained">
                Register
            </Button>
        </StyledForm>
    );
};
