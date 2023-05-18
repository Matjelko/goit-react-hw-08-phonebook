import styled from "@emotion/styled";

export const StyledAuthNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 15px;

    a {
        color: #111;
        text-decoration: none;
        font-size: 20px;

        &:hover {
        /* text-decoration: underline; */
        color: #87CEEB;
        transition: 500ms;
        }
    }
    .active {
        color: #0096FF;
    }
`;