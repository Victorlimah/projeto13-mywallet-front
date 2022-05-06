import Login from "./../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./../provider/userContext";

export default function Router() {
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sing-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
