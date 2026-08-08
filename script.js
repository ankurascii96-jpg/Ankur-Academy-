// ================================
// Ankur Academy - script.js
// ================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Ankur Academy");
});

// ================================
// Search Subjects
// ================================
const searchBox = document.querySelector(".search-box");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let title = card.querySelector("h2").innerText.toLowerCase();

            if (title.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ================================
// Explore Courses Button
// ================================
const exploreBtn = document.querySelector(".btn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector(".subjects").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ================================
// Subject Card Click
// ================================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const subject = card.querySelector("h2").innerText;
        alert("Opening " + subject + " Course");
    });
});

// ================================
// Login Form
// ================================
const loginForm = document.querySelector("form");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {

            alert("Please fill all fields.");

        } else {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        }

    });

}

// ================================
// Footer Year
// ================================
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() + " Ankur Academy | All Rights Reserved";
}
