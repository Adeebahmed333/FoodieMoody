import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const Body = () => {
  return (
    <div>
      <h4>Todo</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h4>Todo</h4>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

//passing the React element to the render
rootElement.render(<AppLayout />);
