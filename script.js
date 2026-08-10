document.addEventListener("DOMContentLoaded", function () {

    // Scroll reveal animation
    const sections = document.querySelectorAll(
        ".content-section, .dream-section"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal", "active");
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


    // Smooth navigation
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Welcome message in console
    console.log("Welcome to Bavya Sri's Portfolio!");
});
