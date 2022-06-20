import styled from "styled-components";
import { Avatar, Typography } from "antd";

export const MainContainer = styled.div`
  display: flex;

  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const SidebarContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 3;

  display: flex;
`;

export const MainAvatar = styled(Avatar)`
  position: relative;
  top: -48px;

  margin-bottom: -48px;
`;

export const NameTitle = styled(Typography.Title)`
  padding: 16px 0;

  > div:first-child {
    font-size: 24px;
  }

  > div:last-child {
    font-size: 20px;
    font-weight: 300;
  }
`;
