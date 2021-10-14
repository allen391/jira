import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ProjectListScreen } from "./screens/project-list";
import LoginScreen from "./screens/login";
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <LoginScreen />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
