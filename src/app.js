import React from "react";
import ReactDOM from "react-dom/client";
import Components from "./components/index";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Components.HeaderComponent />
      <Components.Body />
      <Components.Footer />
    </>
  );
};

rootElement.render(<AppLayout />);
