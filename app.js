import React from "react";
import ReactDOM from "react-dom/client";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <h1 id="title" key="h1">
    Foodie Moody
  </h1>
);
const ReactComponentExample = () => {
  return (
    <div>
      <Title />
      <h1>A Simple React Component</h1>;
    </div>
  );
};

//passing the React element to the render
rootElement.render(<ReactComponentExample />);
