import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Footer } from "./components/index";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

rootElement.render(<AppLayout />);
