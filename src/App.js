import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Mint from "./Pages/Mint";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="mint" element={<Mint />} />
      </Routes>
    </>
  );
}
