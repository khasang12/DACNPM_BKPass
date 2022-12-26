import "./App.css";

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemForm from "./components/pages/AddItemForm";
import InitPage from "./components/pages/initPage";
import SearchPage from "./components/pages/searchPage";
import DisplayItem from "./components/pages/DisplayItem";
import BuyHistory from "./components/pages/BuyHistory";
import SellHistory from "./components/pages/SellHistory";
import {Comment} from './components/pages/Comment'
import {DevTeam} from './components/pages/DeveloperTeam'
import {AddComment} from './components/pages/AddComment'
import Register from "./components/pages/register";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Unauthenticated from "./components/pages/Unauthenticated";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {userContext} from './context/userContext';

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const token = localStorage.getItem("bkpass-user");
    if ((token === undefined) || (token == null))
    {
      setUser(null)
    }
    else {
      setUser(JSON.parse(token))
    }
  }, [])
  return (
    <userContext.Provider value={{user, setUser}}>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="add-item" element={<AddItemForm />} />
          <Route path="/item/:itemId" element={<DisplayItem />} />
          <Route path="/" element={<InitPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="buy-history" element={<BuyHistory />} />
          <Route path="sell-history" element={<SellHistory />} />
          <Route path="/user/:userId" element={<Comment />} />
          <Route path ="dev" element = {<DevTeam/>}/>
          <Route path = "user/:userId/add-comment" element = {<AddComment/>} />
          <Route path = "register" element = {<Register/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path="403" element = {<Unauthenticated/>} />
          <Route path="*" element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </userContext.Provider>
  );
}

export default App;
