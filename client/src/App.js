import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InitPage from "./components/pages/initPage";

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <InitPage/>
    } // Add new page here
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
