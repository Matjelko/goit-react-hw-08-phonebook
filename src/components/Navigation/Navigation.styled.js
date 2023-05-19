import styled from "@emotion/styled";

export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 15px;

    a {
        color: #111;
        text-decoration: none;
        font-size: 20px;

        &:hover {
            color: #87CEEB;
            transition: 500ms;
        }
    }
    .active {
        color: #0096FF;
    }
`;