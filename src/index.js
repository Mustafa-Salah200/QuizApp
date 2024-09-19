import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./poppins.css";
import { ProtectApp } from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import { FirebasrApp } from "./service.js/firebase-service";

FirebasrApp.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ProtectApp />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
