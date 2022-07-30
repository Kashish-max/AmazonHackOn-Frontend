import axios from "axios";

export const Register = async (data) => {
    try {
        const { username, email, password } = data
        const registerURL = "http://localhost:8000/auth/register/"
        const response = await axios.post(registerURL, {
            username: username,
            email: email,
            password: password
        })
        if (response) {
            console.log(response)
            window.location.replace('/login');
        }
    } catch (error) {
        console.log(error);
        let response = error.response.data
        let errorKey = Object.keys(response)[0]
        alert(response[errorKey][0])
    }
}