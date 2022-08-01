import axios from "axios";

export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
    const refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null;
    const loginURL = "https://amazonhackon.herokuapp.com/auth/login";
    const refreshTokenURL = "https://amazonhackon.herokuapp.com/auth/token/refresh/";
    if (accessToken) {
        try {
            const response = axios.get(loginURL, {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            })
            if (response) {
                return { isUserAuthenticated : true, userData: response };
            }
        } catch (error) {
            console.log(error.response.data)
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