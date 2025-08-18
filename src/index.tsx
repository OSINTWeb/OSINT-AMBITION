import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { AboutPage } from "./screens/ElementLight/sections/AboutPage/Aboutpage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
