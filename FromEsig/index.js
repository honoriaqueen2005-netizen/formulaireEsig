
//  filiere.js : choix de la filière, de la salle et de l'effectif
// ============================================================
 
// 1) On récupère les éléments de la page
let formulaire = document.querySelector("form");
let choixFiliere = document.querySelector("select");
 
// querySelectorAll renvoie TOUS les <input> sous forme de liste :
//   inputs[0] = le champ Salle
//   inputs[1] = le champ Effectif
//   inputs[2] = le bouton Enregistrer
let inputs = document.querySelectorAll("input");
let champSalle = inputs[0];
let champEffectif = inputs[1];
 
// 2) Quand on clique sur "Enregistrer" (ou qu'on appuie sur Entrée)...
formulaire.addEventListener("submit", function (event) {
 
    // On empêche le formulaire de recharger la page
    event.preventDefault();
 
    // On lit les valeurs saisies
    let filiere = choixFiliere.value;          // "" si aucune filière choisie
    let salle = champSalle.value.trim();       // trim() enlève les espaces au début et à la fin
    let effectif = champEffectif.value;
 
    // 3) Vérifications, une par une
 
    // La filière : la 1re option "Choix_Filière" a une valeur vide
    if (filiere === "") {
        alert("Veuillez choisir une filière.");
        return;
    }
 
    // La salle ne doit pas être vide
    if (salle === "") {
        alert("Veuillez saisir le nom de la salle.");
        return;
    }
 
    // L'effectif doit être un nombre entier plus grand que 0
    //  - effectif === ""      : champ vide
    //  - isNaN(effectif)      : ce n'est pas un nombre (ex : "abc")
    //  - effectif <= 0        : zéro ou négatif
    //  - effectif % 1 !== 0   : nombre à virgule (ex : 12.5)
    if (effectif === "" || isNaN(effectif) || effectif <= 0 || effectif % 1 !== 0) {
        alert("L'effectif doit être un nombre entier supérieur à 0.");
        return;
    }
 
    // 4) Tout est correct : on récupère le nom affiché de la filière choisie
    let nomFiliere = choixFiliere.options[choixFiliere.selectedIndex].text;
 
    alert("Enregistré !\nFilière : " + nomFiliere + "\nSalle : " + salle + "\nEffectif : " + effectif);
 
    // On vide le formulaire pour une nouvelle saisie
    formulaire.reset();
});