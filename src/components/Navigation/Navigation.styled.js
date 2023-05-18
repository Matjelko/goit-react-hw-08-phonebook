import styled from "@emotion/styled";

export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 15px;

    a {
        color: #111;
        text-decoration: none;

        &:hover {
        text-decoration: underline;
        }
    }
    .active {
        color: #0096FF;
    }
`;