const Nav = document.getElementById('Nav');
const currentPageURL = getCurrentPageURL();

Nav.innerHTML = `
<div class="container-fluid">
    <img onclick="window.location.href='index.html'" src="Components/Img/LogoNew.jpg" width="60" height="80">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav NavSpacing">
            <li class="nav-item">
                <a class="${currentPageURL === "index.html" || currentPageURL === "" ? "Current" : "NotCurrent"}" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="${currentPageURL === "AboutUs.html" ? "Current" : "NotCurrent"}" href="AboutUs.html">About us</a>
            </li>
            <li class="nav-item">
                <a class="${currentPageURL === "ProfitSharingScale.html" ? "Current" : "NotCurrent"}" href="ProfitSharingScale.html">Profit Sharing Scale</a>
            </li>
            <li class="nav-item">
                <a class="${currentPageURL === "ContactUs.html" ? "Current" : "NotCurrent"}" href="ContactUs.html">Contact Us</a>
            </li>
        </ul>
    </div>
</div>
`;

// Function to get the current page URL
function getCurrentPageURL() {
    return window.location.pathname.split("/").pop();
}

function getLoggedInStatus() {
    const loggedIn = getCookie("LoggedIn");
    if (loggedIn == "Yes") {
        console.log("User Logged In");
        return true;
    }
    else {
        return false;
    }
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }

    return "";
}

function LogOut() {
    if (confirm("Are you sure you want to log out?")) {
        deleteCookie("LoggedIn");
        window.location.href = "Login.html";
    }
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


{/* 
<li class="nav-item Center">
    <a class="${currentPageURL === "Login.html" || currentPageURL === "Register.html" || currentPageURL ==="Profile.html" ? "Current" : "NotCurrent"} gg-profile" 
        href="${getLoggedInStatus() ? "Profile.html" : "Login.html"}">
    </a>
    
    ${getLoggedInStatus() ? `<a class="${currentPageURL === "Login.html" || currentPageURL === "Register.html" ? "Current" : "NotCurrent"} ConfirmLogout px-3" 
    onclick="LogOut()">Logout</a>` : ""}
</li>
*/}

