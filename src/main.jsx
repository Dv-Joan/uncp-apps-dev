import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WeekNine from "./components/weekly-exercises/weekNine";

import "./index.css";
import { ProductsProvider } from "./context/productsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <WeekNine />
    </ProductsProvider>
  </React.StrictMode>
);
