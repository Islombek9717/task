import React, { useState, useRef } from "react";
import { Container, Form, Label, Button, AntInput } from "./style";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const loginRef = useRef(null);
  const pwRef = useRef(null);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSave = () => {
    console.log({
      login: login,
      password: password,
    });
    if (login === "admin" && password === "admin12345") {
      navigate("/news");
    } else {
      alert("Incorrect password or login");
    }
  };

  return (
    <Container>
      <Form>
        <Form.Title>Login</Form.Title>
        <Label>Login</Label>
        <AntInput
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          ref={loginRef}
          placeholder="Login"
          prefix={<UserOutlined />}
        />
        <Label>Password</Label>
        <AntInput
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          ref={pwRef}
          placeholder="Password"
          prefix={<LockOutlined />}
        />
        <Button onClick={onSave} border color mt={20} width="100%">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
