import Home from "./../pages/Home";
import { useState } from "react";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import UserContext from "./../provider/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "../pages/Transaction";

export default function Router() {
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sing-up" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
