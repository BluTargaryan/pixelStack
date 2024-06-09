import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import useProfile from "./hooks/useProfile";
import CreatePost from "./Pages/CreatePost";

function App() {

  const { user, isLogin } = useProfile();

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
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;