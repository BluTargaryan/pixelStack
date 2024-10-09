import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProfile() {
  const [isLogin, setisLogin] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setisLogin(false);
      return;
    } else {
      setisLogin(true);
    }
    axios
      .get(`${apiUrl}/api/auth/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return { isLogin, user, error };
}
