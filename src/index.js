import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";

import App from "./App";
import { store } from "redux/store";

import "./index.scss";
import "react-notifications/lib/notifications.css";
import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <NotificationContainer />
    </BrowserRouter>
  </Provider>
);
