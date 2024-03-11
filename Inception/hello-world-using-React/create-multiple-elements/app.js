const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    //when we need to pass multiple childrens then we have to convert it into array
    React.createElement("h1", {}, "helo i'm h1"),
    React.createElement("h2", {}, "helo i'm h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "helo i'm h1"),
    React.createElement("h2", {}, "helo i'm h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
