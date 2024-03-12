import React from "react";
import ReactDOM from "react-dom/client";

// Component composition - composing two component into one another

const Heading = function () {
  return <h1 className="heading">welcome to React World✨</h1>;
};

const BodyTitle = () => (
  <div id="container">
    {Heading()}
    <Heading />
    <Heading></Heading>
    <h1 className="bodyTitle">body of the React World</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyTitle />);
