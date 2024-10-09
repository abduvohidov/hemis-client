import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index.tsx";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);