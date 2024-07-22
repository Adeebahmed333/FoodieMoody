import React from "react";
import ReactDOM from "react-dom/client";
import foodieMoodyLogo from "./images/foodie-moody-logo.png";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <a className="logo" href="/">
    <img src={foodieMoodyLogo} alt="foodie moody" />
  </a>
);
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

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
