import { useAuth } from "hooks/useAuth"
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <StyledNavigation>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && (<NavLink to="/contacts">Contacts</NavLink>
            )}
        </StyledNavigation>
    )
}