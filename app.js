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
      <h4>Foodie Moody</h4>
      <p>
        Foodie Moody is a food delivery service that delivers food to your
        doorstep.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h4>Foodie Moody</h4>
      <p>
        Foodie Moody is a food delivery service that delivers food to your
        doorstep.
      </p>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

//passing the React element to the render
rootElement.render(<AppLayout />);
