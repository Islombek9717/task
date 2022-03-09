import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 0 100px;
  display: flex;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  align-items: center;
  margin-bottom: 64px;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: lightgray;
  z-index: 999;
`;

export const Logo = styled.span`
  display: flex;
  width: fit-content;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 33px;
  line-height: 40px;
  letter-spacing: -0.06em;
  color: ${({ blue }) => (blue ? "blue" : "black")};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${({ active }) => `${active === "true" ? "blue" : "black"}`};
  margin: 0 10px;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Button = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "110px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  color: ${({ border }) => (border ? "blue" : "white")};
  border: ${({ border }) => border && "1px solid blue"};
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
