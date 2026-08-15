document.addEventListener("DOMContentLoaded", () => {

    console.log("Bavya Sri Portfolio Loaded");

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            console.log("Opening:", link.textContent);
        });

    });

});
