import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemForm from "./components/pages/AddItemForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="add-item" element={<AddItemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
