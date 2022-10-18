import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemForm from "./components/pages/AddItemForm";
import DisplayItem from "./components/pages/DisplayItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="add-item" element={<AddItemForm />} />
        <Route path="demo-item" element={<DisplayItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
