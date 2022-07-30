import axios from "axios";

export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
    const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;
    const loginURL = "http://localhost:8000/auth/login";
    const refreshTokenURL = "http://localhost:8000/auth/token/refresh/";
    if (accessToken) {
        axios.get(loginURL, {
            headers: {
                Authorization: "Bearer " + accessToken
            }
        })
        .then(res => {
            console.log(res.status)
        })
        .catch(err => {
            console.log(err)
            axios.post(refreshTokenURL, {
                refresh: refreshToken
            }).then(res => {
                localStorage.setItem('accessToken', res.data.access);
                if (res.data.refresh) localStorage.setItem('refreshToken', res.data.refresh)
                window.location.replace('/login')
            })
        })
    }
}