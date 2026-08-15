document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CREATE FLOATING STARS
    ========================= */

    const starsContainer = document.getElementById("stars");

    const numberOfStars = 90;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.setProperty(
            "--duration",
            (Math.random() * 5 + 5) + "s"
        );

        star.style.setProperty(
            "--twinkle",
            (Math.random() * 3 + 2) + "s"
        );

        star.style.animationDelay =
            (Math.random() * 5) + "s";

        starsContainer.appendChild(star);
    }


    /* =========================
       NAVIGATION
    ========================= */

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    console.log("Bavya Sri Portfolio Loaded");
});
