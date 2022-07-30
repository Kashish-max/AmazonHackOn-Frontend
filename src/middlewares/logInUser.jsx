import axios from "axios";

export const LogIn = async (data) => {
    const { username, password } = data
    const accessTokenURL = "http://localhost:8000/auth/token/"
    try {
        const response = await axios.post(accessTokenURL, {
            username: username,
            password: password
        })
        if (response) {
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh)
            window.location.replace('/dashboard');
        }
    } catch(error) {
        console.log(error)
        alert("Invalid username or password!")
    }
}
