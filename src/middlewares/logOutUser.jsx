export const LogOut = (data) => {
    localStorage.removeItem("accessToken")
    window.location.replace("/")
}
