import React from "react";
import { navbar } from "../../utils/navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Link, Logo, Wrapper } from "./style";

const Navbar = () => {
  const token = localStorage.getItem("userToken");

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Logo onClick={() => navigate("/main")}>
          Nova
          <Logo blue>Lab</Logo>
        </Logo>
        <Wrapper>
          {navbar.map(
            ({ id, pathname, title, hidden }) =>
              !hidden && (
                <Link
                  active={location?.pathname === pathname ? "true" : "false"}
                  to={pathname}
                  key={id}
                >
                  {title}
                </Link>
              )
          )}
        </Wrapper>
        <Button
          onClick={() => {
            localStorage.removeItem("userToken");
            navigate("/login");
          }}
          border="true"
        >
          {token ? "Logout" : "Login"}
        </Button>
      </Container>
      <Outlet />
    </div>
  );
};

export default Navbar;
