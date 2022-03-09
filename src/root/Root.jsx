import React from "react";
import { Container } from "./style";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {navbar.map(
            ({ pathname, id, Element, hidden }) =>
              hidden && <Route key={id} path={pathname} element={<Element />} />
          )}
          <Route element={<Navbar />}>
            {navbar.map(
              ({ pathname, id, Element, hidden }) =>
                !hidden && (
                  <Route key={id} path={pathname} element={<Element />} />
                )
            )}
          </Route>
          <Route path="/" element={<Navigate to={"/main"} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Root;
