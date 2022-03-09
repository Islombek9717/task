import React from "react";
import { Container } from "./style";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <Container>
      <HashRouter>
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
      </HashRouter>
    </Container>
  );
};

export default Root;
