import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h2", null, "HEllo World 123"  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
