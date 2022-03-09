import styled from "styled-components";
import { Input, Form } from "antd";

export const Container = styled.div`
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AntForm = styled(Form)`
  padding: 30px 20px;
  width: 420px;
  height: 300px;
  background-color: lightcyan;
  border-radius: 10px;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
`;

AntForm.Title = styled.div`
  font-weight: 500;
  font-size: 33px;
  line-height: 40px;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 28px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Button = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "110px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  color: ${({ border }) => (border ? "blue" : "white")};
  border: ${({ border }) => border && "1px solid blue"};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  filter: drop-shadow(4px 8px 16px rgba(0, 118, 245, 0.4));
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  :active {
    transform: scale(0.95);
  }
  :hover {
    background: blue;
    color: white;
  }
  cursor: pointer;
`;

export const AntInput = styled(Input)`
  width: 100%;
`;
