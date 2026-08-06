// Menu mobile : ouverture/fermeture du panneau de navigation.

const menuHamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".custom-nav");
const navLinks = document.querySelector(".custom-nav-links");

const setMenu = (open) => {
    navLinks.classList.toggle("mobile-menu", open);
    nav.classList.toggle("nav-menu", open);
    menuHamburger.setAttribute("aria-expanded", String(open));
    // Empêche le défilement de l'arrière-plan quand le panneau est ouvert.
    document.body.style.overflow = open ? "hidden" : "";
};

menuHamburger.setAttribute("role", "button");
menuHamburger.setAttribute("tabindex", "0");
menuHamburger.setAttribute("aria-expanded", "false");
menuHamburger.setAttribute("aria-controls", "custom-nav-links");
navLinks.id = "custom-nav-links";

const toggleMenu = () => setMenu(!navLinks.classList.contains("mobile-menu"));

menuHamburger.addEventListener("click", toggleMenu);

menuHamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
    }
});

// Refermer après navigation, sinon le panneau masque la section visée.
navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenu(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("mobile-menu")) {
        setMenu(false);
    }
});
