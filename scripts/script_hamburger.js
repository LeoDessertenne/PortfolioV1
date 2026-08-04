// Sélectionner l'élément du menu hamburger
const menuHamburger = document.querySelector(".hamburger");

// Sélectionner l'élément de navigation
const nav = document.querySelector(".custom-nav");

// Sélectionner les liens de navigation
const navLinks = document.querySelector(".custom-nav-links");

// Ajouter un écouteur d'événement de clic sur le menu hamburger
menuHamburger.addEventListener('click', () => {
  // Basculer la classe 'mobile-menu' pour afficher/cacher les liens de navigation sur les appareils mobiles
  navLinks.classList.toggle('mobile-menu');
  
  // Basculer la classe 'nav-menu' pour afficher/cacher la barre de navigation sur les appareils mobiles
  nav.classList.toggle('nav-menu');
});
