// Définition du ratio de visibilité
const ratio = 0.1;

// Options de configuration pour l'Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

// Fonction de gestion de l'intersection
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      // Ajouter une classe pour révéler l'élément visible
      entry.target.classList.add('reveal-visible');
      
      // Cesser d'observer l'élément une fois révélé
      observer.unobserve(entry.target);
    }
  });
};

// Créer une instance de l'Intersection Observer avec la fonction de gestion et les options
const observer = new IntersectionObserver(handleIntersect, options);

// Observer tous les éléments avec la classe 'reveal'
document.querySelectorAll('.reveal-apparition').forEach(function (r) {
  observer.observe(r);
});
