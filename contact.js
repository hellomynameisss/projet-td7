/*fonctions débugguées et complétées avec des ressources extérieures */

/*fonction des deux listes synchronisées*/

function consignelistes() {
    var domaine = document.getElementById("domaine");
    var branche = document.getElementById("branche"); /*on récupère la liste des domaines et la liste des branches*/
    
    branche.innerHTML = ""; /*pour eviter les doublons on efface les options existants dans la liste branche*/

    /*on met en place une option par défaut, càd avant selection de l'utilisateur*/
    var optionpardefaut = document.createElement("option");
    optionpardefaut.value = "choisirBranche";
    optionpardefaut.textContent = "Choisissez une branche...";
    branche.appendChild(optionpardefaut);


    /*on récupère la valeur sélectionnée dans les domaines*/
    var domaineSelectionne = domaine.value;

    /*initialisation liste vide pour les branches*/
    var branches = [];  /*initialisation tableau vide pour les options de branches*/

    /*on remplit les branches selon le domaine choisi*/
    if (domaineSelectionne === "domaine1") {
        branches = ["Ingénieur machine learning", "Ingénieur de prompt", "Chercheur", "Responsable de l'éthique IA", "Autre"];
    } else if (domaineSelectionne === "domaine2") {
        branches = ["Analyste cybersécurité", "Ingénieur en cybersécurité", "Consultant en sécurité", "Autre"];
    } else if (domaineSelectionne === "domaine3") {
        branches = ["Développeur front-end", "Développeur back-end", "Développeur full-stack", "Autre"];
    } else if (domaineSelectionne === "domaine4") {
        branches = ["Data analyst", "Data engineer", "Business intelligence analyst", "Chercheur", "Autre"];
    }

    /* ajout options liste déroulante*/
    for (var i = 0; i < branches.length; i++) {
        var nouvelleOption = document.createElement("option");
        nouvelleOption.value = branches[i]; /*on définit la valeur de l'option*/
        nouvelleOption.textContent = branches[i]; /*et le texte affiché*/
        branche.appendChild(nouvelleOption); /*on ajoute l'option à la liste des branches*/
    }
}




/*fonction de validation du formulaire*/
function verification() {
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var tel = document.getElementById("tel");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var domaineInteret1 = document.getElementById("domaineinteret1");
    var domaineInteret2 = document.getElementById("domaineinteret2");
    var domaineInteret3 = document.getElementById("domaineinteret3");
    var domaineInteret4 = document.getElementById("domaineinteret4");
    var domaineInteret5 = document.getElementById("domaineinteret5");

    /*variable booléenne de vérification */
    var formulaireValide = true;

    /*fonction pour afficher un message d'erreur*/
    function erreur(element, message) {
        var msg = document.createElement("span");
        msg.className = "error-message";
        msg.style.color = "red";
        msg.textContent = message;
        element.parentNode.insertBefore(msg, element.nextSibling);
    }

    /*vérification de chaque champ requis*/
    if (nom.value === "") {
        erreur(nom, "Il faut remplir ce champ.");
        formulaireValide = false;
    }
    if (prenom.value === "") {
        erreur(prenom, "Il faut remplir ce champ.");
        formulaireValide = false;
    }
    if (tel.value === "") {
        erreur(tel, "Il faut remplir ce champ.");
        formulaireValide = false;
    }
    if (password.value === "") {
        erreur(password, "Il faut remplir ce champ.");
        formulaireValide = false;
    }
    if (email.value === "") {
        erreur(email, "Il faut remplir ce champ.");
        formulaireValide = false;
    }

    /*vérification qu'au moins une case est cochée*/
    if (!domaineInteret1.checked && !domaineInteret2.checked && !domaineInteret3.checked && !domaineInteret4.checked && !domaineInteret5.checked) {
        erreur(domaineInteret1, "Il faut sélectionner au moins 1 domaine d'intérêt.");
        formulaireValide = false;
    }

    return formulaireValide;
}





