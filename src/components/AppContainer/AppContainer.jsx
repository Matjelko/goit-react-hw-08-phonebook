import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"

import { useAuth } from "hooks/useAuth"

import { StyledHeader, StyledHeaderWrapper } from "./AppContainer.styled"
import { StyledContainer } from "components/Layout/Layout.styled"

export const AppContainer = () => {
    const { isLoggedIn } = useAuth()

    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderWrapper>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </StyledHeaderWrapper>
            </StyledContainer>
        </StyledHeader>
    )
}