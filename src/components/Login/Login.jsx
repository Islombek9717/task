import React, { useState, useRef } from "react";
import { Container, AntForm, Label, Button, AntInput } from "./style";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (login === "admin" && password === "admin12345") {
      localStorage.setItem("userToken", "token");
      navigate("/news");
    } else {
      message.error("Incorrect password or login");
    }
  };

  return (
    <Container>
      <AntForm>
        <AntForm.Title>Login</AntForm.Title>
        <Label>Login</Label>
        <AntInput
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login"
          prefix={<UserOutlined />}
        />
        <Label>Password</Label>
        <AntInput
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="on"
          prefix={<LockOutlined />}
        />
        <Button onClick={onSubmit} border color="true" mt={20} width="100%">
          Login
        </Button>
      </AntForm>
    </Container>
  );
};

export default Login;
