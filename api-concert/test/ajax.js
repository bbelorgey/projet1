// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

var infosElt = document.getElementById("infos");
var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfil = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/users/" + nomProfil, function (reponse) {
        // Transformation de la réponse en un objet JSON
        var profil = JSON.parse(reponse);
        // Création des informations sur le profil
        var avatarElt = document.createElement("img");
        avatarElt.src = profil.avatar_url;
        avatarElt.style.height = "150px";
        avatarElt.style.width = "150px";
        var nomElt = document.createElement("div");
        nomElt.textContent = profil.name;
        nomElt.style.fontSize = "20px";
        var employeurElt = document.createElement("div");
        employeurElt.textContent = profil.company;
        var siteElt = document.createElement("a");
        siteElt.href = profil.blog;
        siteElt.textContent = siteElt.href;
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(avatarElt);
        infosElt.appendChild(nomElt);
        infosElt.appendChild(employeurElt);
        infosElt.appendChild(siteElt);
    });
});