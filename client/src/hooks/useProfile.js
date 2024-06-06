import { useState, useEffect } from "react";
import axios from "axios";

export default function useProfile() {
    const [isLogin, setisLogin] = useState(true)
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
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
                setError(err);
            })
    }, [])
    return { isLogin, user, error }
}