//Code pour manipuler les classes et de valider les reponses
const btnQt1 = document.getElementById("btn-qt-1");
const active = document.querySelector(".active");
const rsp1 = document.getElementById("reponse1");
const section3 = document.getElementsByClassName('bp-enigme-section3');
const btnOk = document.createElement('button');
btnOk.classList.add("btnOk");

const btnQt2 = document.getElementById("btn-qt-2");
const rsp2 = document.getElementById("reponse2");

const btnQt3 = document.getElementById("btn-qt-3");
const rsp3 = document.getElementById("reponse3");

//Pour la question n 1
btnQt1.addEventListener('click', (e) => {
    e.preventDefault();
    reponseQt1 = "si je suis fidele c'est a ce trone peu importe qui monte dessus";
    if (rsp1.value.toUpperCase() == reponseQt1.toUpperCase()) {
        active.classList.remove("active");
        section3[1].classList.add('active');

        const popup = createPopup("BRAVO ! <br/> Tu as trouvé la réponse. <br/> Es tu prêt pour l’énigme suivante ?", 1);
        btnOk.innerHTML = "Question suivante";
        popup.appendChild(btnOk);
        document.body.appendChild(popup);
        btnOk.addEventListener('click', () => {
        popup.style.display = "none";
      })
    } else {
        const errorPopup = createPopup("Vous devez reessayer", 0);
    btnOk.addEventListener('click', () => {
        errorPopup.style.display = "none";
      })
    btnOk.innerHTML = "Reessayer";
    errorPopup.appendChild(btnOk);
    document.body.appendChild(errorPopup);
    }
    
});
//Pour la question n 2
btnQt2.addEventListener('click', (e) => {
    e.preventDefault();
    reponseQt2 = "si je suis fidele c'est a ce trone peu importe qui monte dessus";
    if (rsp2.value.toUpperCase() == reponseQt2.toUpperCase()) {
        section3[1].classList.remove("active");
        section3[2].classList.add('active');

        const popup = createPopup("BRAVO ! <br/> Tu as trouvé la réponse. <br/> Es tu prêt pour l’énigme suivante ?", 1);
        btnOk.innerHTML = "Question suivante";
        popup.appendChild(btnOk);
        document.body.appendChild(popup);
        btnOk.addEventListener('click', () => {
        popup.style.display = "none";
      })
    } else {
        const errorPopup = createPopup("Vous devez reessayer", 0);
    btnOk.addEventListener('click', () => {
        errorPopup.style.display = "none";
      })
    btnOk.innerHTML = "Reessayer";
    errorPopup.appendChild(btnOk);
    document.body.appendChild(errorPopup);
    }
    
});

//Pour la question n 3

btnQt3.addEventListener('click', (e) => {
    e.preventDefault();
    reponseQt3 = "si je suis fidele c'est a ce trone peu importe qui monte dessus";
    if (rsp3.value.toUpperCase() == reponseQt3.toUpperCase()) {
        section3[2].classList.remove("active");
        section3[0].classList.add('active');

        const popup = createPopup("BRAVO ! <br/> Tu as trouvé la réponse.", 1);
        btnOk.innerHTML = "Terminer";
        popup.appendChild(btnOk);
        document.body.appendChild(popup);
        btnOk.addEventListener('click', () => {
        popup.style.display = "none";
      })
    } else {
        const errorPopup = createPopup("Vous devez reessayer", 0);
    btnOk.addEventListener('click', () => {
        errorPopup.style.display = "none";
      })
    btnOk.innerHTML = "Reessayer";
    errorPopup.appendChild(btnOk);
    document.body.appendChild(errorPopup);
    }
    
});


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