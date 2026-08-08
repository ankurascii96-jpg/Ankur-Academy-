// Welcome button
function welcome() {
    alert("✨ Welcome to My Luxury Website!");
}

// Header shadow while scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 5px 20px rgba(255,215,0,0.3)";
    } else {
        header.style.background = "rgba(0,0,0,0.7)";
        header.style.boxShadow = "none";
    }
});

// Gallery image click effect
const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.1)";
        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 300);
    });
});
