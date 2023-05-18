import styled from "@emotion/styled";

export const StyledAuthNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;

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