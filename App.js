//Ici, ce sont les codes js en commun avec tous les pages
// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementVisible(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight;
}

// Fonction pour ajouter la classe "fade-in-visible" aux éléments visibles
function showVisibleElements() {
  const fadeElements = document.getElementsByClassName("fade-in");

  for (var i = 0; i < fadeElements.length; i++) {
    let element = fadeElements[i];
    if (isElementVisible(element)) {
      element.classList.add("fade-in-visible");
    }
  }
}

// Événement de défilement
window.addEventListener("scroll", showVisibleElements);

// Afficher les éléments visibles au chargement initial de la page
window.addEventListener("DOMContentLoaded", showVisibleElements);