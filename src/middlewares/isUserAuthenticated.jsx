import axios from "axios";

export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
    const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;
    const loginURL = "http://localhost:8000/auth/login";
    const refreshTokenURL = "http://localhost:8000/auth/token/refresh/";
    if (accessToken) {
        try {
            const response = axios.get(loginURL, {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            })
            if (response) {
                console.log(response.status);
                return true;
            }
        } catch (error) {
            console.log(error)
            axios.post(refreshTokenURL, {
                refresh: refreshToken
            }).then(res => {
                localStorage.setItem('accessToken', res.data.access);
                if (res.data.refresh) localStorage.setItem('refreshToken', res.data.refresh)
                window.location.replace('/login')
            })
            return false;
        }
    }
}