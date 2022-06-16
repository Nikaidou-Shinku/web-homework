import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 32px;
  height: 32px;

  background-color: rgb(36, 41, 47);

  svg {
    fill: white;
    transition: 0.15s;
  }

  svg:hover {
    fill: rgb(190, 191, 193);
    transition: 0.15s;
  }
`;
