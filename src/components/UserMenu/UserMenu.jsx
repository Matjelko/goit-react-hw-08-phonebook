import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { StyledWrapper } from "./UserMenu.styled";
import { Button } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <StyledWrapper>
            <p>Welcome, {user.name}</p>
            <Button
                size="small"
                variant="outlined"
                color="error"
                type="button" 
                onClick={() => dispatch(logOut())}
            >
                Log out
            </Button>
        </StyledWrapper>
    )
}