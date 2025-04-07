/*fonction pour le moteur de recherche*/ 

function rechercherMot() {
    /*récupération du mot entré par l'utilisateur puis on le passe en minuscule*/
    var mot = document.getElementById("entreerecherche").value.toLowerCase();
    
    /*on récupère tout le texte de la page et on passe aussi en minuscules*/ 
    var texte = document.body.textContent.toLowerCase();
    
    /* comptage du nombre d'occurrences*/
    var compteur = 0; /*on initialise*/
    var position = texte.indexOf(mot);
    while (position !== -1) {
        compteur++;
        position = texte.indexOf(mot, position + mot.length);
    }
    
    /*affiche du résultat*/
    document.getElementById("resultatrecherche").textContent = 
        "Le mot '" + mot + "' apparaît " + compteur + " fois dans la page.";
}





/*fonction pour le bouton de personnalisation*/

function personnalisation() {
    /* récupération des valeurs sélectionnées dans le formulaire par l'utilisateur*/
    var police = document.getElementById("police").value; 
    var couleur = document.getElementById("couleurtxt").value; 
    var taille = document.getElementById("tailletxt").value + "px"; 

    /*fonction pour appliquer les styles aux éléments cliqués*/
    document.body.onclick = function(event) {
        var element = event.target; 

        /* application des styles du formulaire aux élements cliqués par l'utilisateur*/
        element.style.fontFamily = police; 
        element.style.color = couleur; 
        element.style.fontSize = taille; 
    }
}
