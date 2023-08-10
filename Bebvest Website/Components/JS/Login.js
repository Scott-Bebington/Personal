
function LogUserIn() {
    // Set a cookie named "LoggedIn" with value "Yes" that expires in 7 days
    setCookie("LoggedIn", "Yes", 7);
    console.log("User Logged In");
    window.location.href = "index.html";
}

function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieValue = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + expirationDate.toUTCString() + ";path=/";

    document.cookie = cookieValue;
}
