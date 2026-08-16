document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FLOATING BLUE STARS
    ========================= */

    const starsContainer = document.getElementById("stars");

    if (starsContainer) {

        for (let i = 0; i < 90; i++) {

            const star = document.createElement("span");

            star.className = "star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            const size =
                Math.random() * 3 + 1;

            star.style.width =
                size + "px";

            star.style.height =
                size + "px";

            star.style.setProperty(
                "--duration",
                Math.random() * 5 + 5 + "s"
            );

            star.style.setProperty(
                "--twinkle",
                Math.random() * 3 + 2 + "s"
            );

            star.style.animationDelay =
                Math.random() * 5 + "s";

            starsContainer.appendChild(star);
        }
    }


    /* =========================
       SMOOTH SCROLL REVEAL
    ========================= */

    const sections =
        document.querySelectorAll(".section");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    sections.forEach(function (section) {

        section.classList.add("reveal");

        observer.observe(section);

    });

});
