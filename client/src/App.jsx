import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [isLogin, setisLogin] = useState(true)
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/api/auth/profile", {
      withCredentials: true
    })
      .then((res) => {
        setisLogin(true)
        setUser(res.data.user)
      })
      .catch((err) => {
        setisLogin(false)
      })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        {isLogin && (
          <Route path="/" element={<Dashboard user={user} />} />
        )}
        {!isLogin && (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;