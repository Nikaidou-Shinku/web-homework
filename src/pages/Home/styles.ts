import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div``;

export const TopHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 62px;
  padding: 16px 32px;

  color: white;
  background-color: rgb(36, 41, 47);
`;

export const CustomInput = styled(Input)`
  width: 272px;
  height: 30px;

  color: white;
  background-color: rgb(36, 41, 47);

  border: 1px solid rgb(87, 96, 106);
  border-radius: 6px;

  :focus {
    width: 544px;

    color: black;
    background-color: white;
  }
`;

export const LinksContainer = styled.div`
  flex: auto;

  margin-left: 16px;

  font-size: 14px;
  font-weight: 600;

  > a {
    color: white;
    transition: 0.15s;
  }

  > a:hover {
    color: rgb(190, 191, 193);
    transition: 0.15s;
  }

  > a:not(:first-child) {
    margin-left: 16px;
  }
`;
