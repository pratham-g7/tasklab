const isLoggedIn = async () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
        const response = await fetch("http://127.0.0.1:3000/tasklab-backend/auth/verify_token", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`}
            });
        return response.ok;
        } catch (error) {
            console.error("Error verifying token:", error);
            return false;
        }
    
}

const toggleUi = (loggedIn) => {
    if (loggedIn) {
            $("#signup_btn").hide();
            $("#login_btn").hide();
            $("#dashboard").show();
        } else {
            $("#dashboard").hide();
            $("#signup_btn").show();
            $("#login_btn").show();
        }
    };

document.addEventListener("DOMContentLoaded", () => {
    isLoggedIn().then(toggleUi)});

export default {isLoggedIn}