import styled from "styled-components";

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 16px 48px 16px;

  font-size: 12px;

  .content {
    display: flex;
    justify-content: space-between;

    margin-top: 40px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 8px;
  }

  svg {
    width: 24px;
    height: 24px;

    fill: rgb(110, 119, 129);
    transition: 0.15s;
  }

  svg:hover {
    fill: rgb(87, 96, 106);
    transition: 0.15s;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;

  > a:not(:first-child) {
    margin-left: 44px;
  }
`;
