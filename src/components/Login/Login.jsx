import React, { useState, useRef } from "react";
import { Container, Form, Label, Button, AntInput } from "./style";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginRef = useRef("");
  const pwRef = useRef("");
  const onSave = () => {
    console.log({
      login: loginRef.current.value,
      password: pwRef.current.value,
    });
    if (
      loginRef.current.value === "admin" &&
      pwRef.current.value === "admin12345"
    ) {
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
          onChange={(e) => (loginRef.current.value = e.target.value)}
          ref={loginRef}
          placeholder="Login"
          prefix={<UserOutlined />}
        />
        <Label>Password</Label>
        <AntInput
          type={"password"}
          onChange={(e) => (pwRef.current.value = e.target.value)}
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
