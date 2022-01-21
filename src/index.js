import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import User from "./components/User";


const isLoggedIn = true;

ReactDOM.render(isLoggedIn? <App /> : <User />, document.getElementById("root"));

