const Card1 = document.getElementById("Card1");
        const Card2 = document.getElementById("Card2");
        const Card3 = document.getElementById("Card3");

        Card1.style.backgroundColor = "white";
        Card2.style.backgroundColor = "white";
        Card3.style.backgroundColor = "white";

        Card1.style.backgroundImage = "url(Img/LogoNew.png)";
        Card2.style.backgroundImage = "url(Img/Wines.jpg)";
        Card3.style.backgroundImage = "url(Img/Wine_Tasting.jpg)";

        Card1.addEventListener("mouseenter", function () {
            Card1.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(Img/LogoNew.png)";
            Card1.innerHTML = `<div class="info">Our Story</div>`;
        });

        Card1.addEventListener("mouseleave", function () {
            Card1.style.backgroundColor = "white";
            Card1.style.backgroundImage = "url(Img/LogoNew.png)";
            Card1.innerHTML = "";
        });

        Card2.addEventListener("mouseenter", function () {
            Card2.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(Img/Wines.jpg)";
            Card2.innerHTML = `<div class="info">Wine Collection</div>`;
        });

        Card2.addEventListener("mouseleave", function () {
            Card2.style.backgroundColor = "white";
            Card2.style.backgroundImage = "url(Img/Wines.jpg)";
            Card2.innerHTML = "";
        });

        Card3.addEventListener("mouseenter", function () {
            Card3.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(Img/Wine_Tasting.jpg)";
            Card3.innerHTML = `<div class="info">Wine Tasting</div>`;
        });

        Card3.addEventListener("mouseleave", function () {
            Card3.style.backgroundColor = "white";
            Card3.style.backgroundImage = "url(Img/Wine_Tasting.jpg)";
            Card3.innerHTML = "";
        });

        

        function GoToAboutUs() {
            window.location.href = "AboutUs.html";
        }

        function GoToWines() {
            window.location.href = "Wines.html";
        }

        function GoToWineTasting() {
            window.location.href = "WineTasting.html";
        }