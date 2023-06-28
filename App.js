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

// Sélection des éléments H1 et H2 sur les pages Accueil, Wakanda et Énigme
const titles = document.querySelectorAll("h1, h2");

// Ajout de l'événement de survol de la souris pour les titres
titles.forEach((title) => {
  title.addEventListener("mouseover", () => {
    title.style.transform = "scale(1.1)";
  });

  title.addEventListener("mouseout", () => {
    title.style.transform = "scale(1)";
  });
});

// Sélection de l'image de T'Challa sur la page Accueil
const tchallaImage = document.querySelector(".tchallaImage");

// Ajout de l'événement de survol de la souris pour l'image de T'Challa
tchallaImage.addEventListener("mouseover", () => {
  tchallaImage.style.transform = "scale(1.1)";
  tchallaImage.style.transition = "300ms";
});

tchallaImage.addEventListener("mouseout", () => {
  tchallaImage.style.transform = "scale(1)";
  tchallaImage.style.transition = "300ms";
});
