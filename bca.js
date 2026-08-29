// ======================================
// BCA LEARNING HUB - JAVASCRIPT
// ======================================


// 🌙☀️ DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark";
        localStorage.setItem("theme", "light");
    }

});


// Remember user's theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Light";

}


// ======================================
// 🔍 SEARCH
// ======================================

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase().trim();

    const cards = document.querySelectorAll(
        ".language-card, .resource-card"
    );

    cards.forEach(function (card) {

        const text = card.textContent.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


// ======================================
// ✨ CARD ANIMATION
// ======================================

const cards = document.querySelectorAll(
    ".language-card, .resource-card"
);

cards.forEach(function (card, index) {

    card.style.animationDelay = `${index * 0.08}s`;

});


// ======================================
// 🚀 WELCOME MESSAGE
// ======================================

console.log("📚 BCA Learning Hub loaded successfully!");
