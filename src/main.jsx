import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import "./index.css";
import TransferPage from "./TransferPage.jsx";
import TopUpPage from "./TopUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/topup" element={<TopUpPage />} />
    </Routes>
  </BrowserRouter>
);
