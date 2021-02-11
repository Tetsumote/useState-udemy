import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthContextProvider from "./context/auth-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  rootElement
);
