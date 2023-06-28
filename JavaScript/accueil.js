const form = document.querySelector("form");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const texteArea = document.getElementById("texte");
const btnEnvoyer = document.getElementById("bp-btn-accueil");
const btnOk = document.createElement('button');
btnOk.classList.add("btnOk");

btnEnvoyer.addEventListener("click", (event) => {
  event.preventDefault();

  const nom = nomInput.value.trim();
  const email = emailInput.value.trim();
  const message = texteArea.value.trim();

  let isValid = true;
  let errorMessage = "";

  if (nom.length <= 3) {
    nomInput.classList.add("error");
    isValid = false;
    errorMessage += "Le nom doit contenir plus de 3 caractères.<br>";
  } else {
    nomInput.classList.remove("error");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailInput.classList.add("error");
    isValid = false;
    errorMessage += "L'email n'est pas valide.<br>";
  } else {
    emailInput.classList.remove("error");
  }

  if (message === "") {
    texteArea.classList.add("error");
    isValid = false;
    errorMessage += "Le message ne peut pas être vide.<br>";
  } else {
    texteArea.classList.remove("error");
  }

  if (isValid) {
    const popup = createPopup("Formulaire valide !", 1);
    btnOk.innerHTML = "OK"
    popup.appendChild(btnOk);
    document.body.appendChild(popup);
    btnOk.addEventListener('click', () => {
        popup.style.display = "none";
      })
    
  } else {
    const errorPopup = createPopup(errorMessage, 0);
    btnOk.addEventListener('click', () => {
        errorPopup.style.display = "none";
      })
    btnOk.innerHTML = "OK";
    errorPopup.appendChild(btnOk);
    document.body.appendChild(errorPopup);
  }
});

// Fonction pour créer un popup
function createPopup(message, nbr) {
  const popup = document.createElement("div");
  if (nbr == 1) {
    popup.classList.add("popup");
  } else {
    popup.classList.add("error-popup");
  }
 
  popup.innerHTML = message;
  return popup;
}


