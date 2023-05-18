import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useAuth } from "hooks/useAuth"
import { StyledHeader, StyledHeaderWrapper } from "./AppContainer.styled"
import { StyledContainer } from "components/Layout/Layout.styled"

export const AppContainer = () => {
    const { isLoggedIn } = useAuth()

    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <IconButton
        //                 size="large"
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="menu"
        //                 sx={{ mr: 2 }}
        //             >
        //                 {/* <MenuIcon /> */}
        //             </IconButton>
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                 <Navigation />
        //             </Typography>
        //             <Button color="inherit">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Button>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderWrapper>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </StyledHeaderWrapper>
            </StyledContainer>
        </StyledHeader>

        // <header>
        //     <Navigation />
        //     {isLoggedIn ? <UserMenu /> : <AuthNav />}
        // </header>
    )
}