// ============================================================
//  form.js : page de connexion
// ============================================================

// 1) Le mot de passe correct (changez-le si vous voulez)
let motDePasseCorrect = "esig2026";

// 2) On récupère les éléments de la page.
//    Votre HTML n'a pas d'id, donc on utilise querySelector
//    qui trouve le PREMIER élément correspondant à la balise donnée.
let formulaire = document.querySelector("form");
let champPassword = document.querySelector("input");
let bouton = document.querySelector("button");

// 3) Quand on clique sur le bouton "Connexion"...
bouton.addEventListener("click", function (event) {

    // Votre bouton est dans un lien <a href="filiere.html">.
    // Sans cette ligne, la page changerait SANS vérifier le mot de passe.
    // preventDefault() = "annule ce que le navigateur ferait automatiquement".
    event.preventDefault();

    // On lit ce que l'utilisateur a tapé
    let motDePasseSaisi = champPassword.value;

    // Si le champ est vide
    if (motDePasseSaisi === "") {
        alert("Veuillez saisir votre mot de passe.");
        return; // on arrête ici
    }

    // Si le mot de passe est faux
    if (motDePasseSaisi !== motDePasseCorrect) {
        alert("Mot de passe incorrect.");
        champPassword.value = ""; // on vide le champ
        return;
    }

    // Si on arrive ici, le mot de passe est bon : on va à la page suivante
    window.location.href = "filiere.html";
});

// 4) On empêche aussi l'envoi automatique du formulaire
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
});