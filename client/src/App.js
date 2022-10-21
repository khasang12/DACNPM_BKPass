import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemForm from "./components/pages/AddItemForm";
import InitPage from "./components/pages/initPage";
import SearchPage from "./components/pages/searchPage";
import DisplayItem from "./components/pages/DisplayItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="add-item" element={<AddItemForm />} />
        <Route path="demo-item" element={<DisplayItem />} />
        <Route path="/" element={<InitPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
