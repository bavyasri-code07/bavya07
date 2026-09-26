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
    /* ================================
   LITTLE WISH DIGITAL - CURRENT WORK
   ================================ */

#current-work {
    padding: 80px 20px;
}

#current-work .section-title {
    margin-bottom: 35px;
}

.work-card {
    max-width: 850px;
    margin: 0 auto;
    padding: 35px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 0 30px rgba(0, 150, 255, 0.12);
}

.work-content h3 {
    font-size: 28px;
    margin-bottom: 10px;
}

.work-role {
    font-size: 15px;
    opacity: 0.8;
    margin-bottom: 20px;
}

.work-content p:not(.work-role) {
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 25px;
}

.work-button {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s ease;
}

.work-button:hover {
    transform: translateY(-3px);
}

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
