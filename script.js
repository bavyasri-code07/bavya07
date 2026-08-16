// ========================================
// BAVYA SRI PORTFOLIO - SCRIPT.JS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // FLOATING STARS
    // ========================================

    const starsContainer = document.getElementById("stars");

    if (starsContainer) {

        const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {

            const star = document.createElement("span");

            star.classList.add("star");

            // Random position
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            // Random size
            const size = Math.random() * 3 + 1;

            star.style.width = size + "px";
            star.style.height = size + "px";

            // Random animation speed
            star.style.setProperty(
                "--duration",
                Math.random() * 6 + 5 + "s"
            );

            star.style.setProperty(
                "--twinkle",
                Math.random() * 3 + 2 + "s"
            );

            // Random animation delay
            star.style.animationDelay =
                Math.random() * 6 + "s";

            starsContainer.appendChild(star);
        }
    }


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            }
        });

    });


    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================

    const sections =
        document.querySelectorAll(".section");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    sections.forEach(section => {

        section.classList.add("reveal");

        revealObserver.observe(section);

    });


    // ========================================
    // ACTIVE NAVIGATION
    // ========================================

    const pageSections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    const activeObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navItems.forEach(item => {

                            item.classList.remove("active");

                        });

                        const activeLink =
                            document.querySelector(
                                `.nav-links a[href="#${entry.target.id}"]`
                            );

                        if (activeLink) {

                            activeLink.classList.add("active");

                        }

                    }

                });

            },
            {
                threshold: 0.45
            }
        );


    pageSections.forEach(section => {

        activeObserver.observe(section);

    });


    // ========================================
    // CARD MOUSE EFFECT
    // ========================================

    const cards =
        document.querySelectorAll(
            ".glass-card, .education-card, .project-card, .certificate-card, .contact-box"
        );

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y - rect.height / 2) / rect.height) * -3;

            const rotateY =
                ((x - rect.width / 2) / rect.width) * 3;

            card.style.transform =
                `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    // ========================================
    // WELCOME MESSAGE
    // ========================================

    console.log(
        "✨ Welcome to Bavya Sri's Portfolio!"
    );
    const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

});
