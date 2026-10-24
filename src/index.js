import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/abdulrahman-portfolio-react">
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
