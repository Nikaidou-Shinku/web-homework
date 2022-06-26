import styled from "styled-components";

export const PinnedContainer = styled.div`
  > span {
    margin-left: 8px;
    font-size: 16px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }
`;

export const PinnedItemContainer = styled.div`
  width: 49.99999998%;
  margin-bottom: 16px;
  padding: 0 8px;
`;

export const PinnedMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;

  color: #57606a;
  fill: #57606a;
  border: 1px solid #d0d7de;
  border-radius: 6px;

  > *:not(:first-child) {
    margin-top: 8px;
  }
`;

export const PinnedTitle = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > *:not(:first-child) {
    margin-left: 8px;
  }
`;

export const PublicBadge = styled.div`
  padding: 0.12em 0.5em;

  border: 1px solid #d0d7de;
  border-radius: 2em;

  font-size: 85%;
  font-weight: 500;
  line-height: 18px;
`;

export const PinnedContent = styled.div`
  display: flex;

  > div, > a {
    display: flex;
    align-items: center;

    > span {
      margin-left: 4px;
    }
  }

  > a {
    margin-left: 16px;
    color: #57606a;
  }

  > a:hover {
    color: #0969da;
    fill: #0969da;
  }

  font-size: 12px;
`;

export const LangCircle = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;
`;
