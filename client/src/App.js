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
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
