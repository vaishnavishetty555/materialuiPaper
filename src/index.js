import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
