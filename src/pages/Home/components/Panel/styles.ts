import styled from "styled-components";
import { Badge } from "antd";

export const PanelContainer = styled.div`
  .ant-tabs-nav-wrap {
    padding-left: 80px;
  }
  .ant-tabs-nav {
    height: 73px;
    border-bottom: 1px solid rgb(216, 222, 228);
  }
  .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-nav-list {
    align-items: flex-end;
  }
  .ant-tabs-ink-bar {
    border-radius: 6px;
    background-color: rgb(253, 140, 115);
  }

  .ant-tabs-tab {
    padding: 9px 0;
  }
  .ant-tabs-tab-active {
    font-weight: 600;
  }
`;

export const TabPaneContainer = styled.span`
  display: flex;
  align-items: center;

  padding: 7px;
  border-radius: 6px;

  color: black;

  > svg {
    margin-right: 8px;
  }

  :hover {
    background-color: rgb(240, 242, 244);
    transition: 80ms;
  }

  transition: 80ms;
`;

export const TabPaneBadge = styled(Badge)`
  margin-left: 8px;

  .ant-badge-count {
    color: black;
    background-color: rgb(227, 229, 231);
  }
`;
