const isLoggedIn = async () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
        const response = await fetch("https://tasklab-waxy.onrender.com/auth/verify", {
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

$(".create_tasklab").on("click", () => {
    window.location.href = "dashboard.html";
});

$(".join_tasklab").on("click", () => {
    window.location.href = "dashboard.html";
});

export default {isLoggedIn}