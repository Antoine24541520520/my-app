import React from "react";
import Home from "./pages/Home";
import MonDeck from "./pages/MonDeck";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Page2" element={<MonDeck />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
