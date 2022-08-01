import axios from "axios";

export const UpdateUser = async (data) => {
    try {
        const { username, email, first_name, last_name, website, description, isPrivate, userId } = data
        const accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
        const updateUserURL = "https://amazonhackon.herokuapp.com/auth/update_profile/" + userId.toString() + "/"
        const response = await axios.put(updateUserURL, {
            headers: {
                Authorization: "Bearer " + accessToken
            }
        }
        ,{
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            website: website,
            description, isPrivate
        })
        if (response) {
            console.log(response)
            window.location.replace('/');
        }
    } catch (error) {
        console.log(error);
        let response = error.response.data
        let errorKey = Object.keys(response)[0]
        alert(response[errorKey][0])
        return response[errorKey][0]
    }
}