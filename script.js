function showPage(pageId) {

```
// Cache toutes les pages
const pages = document.querySelectorAll(".page");

pages.forEach(page => {
    page.classList.remove("active");
});

// Affiche la page demandée
const selectedPage = document.getElementById(pageId);

if (selectedPage) {
    selectedPage.classList.add("active");
}

// Remonte en haut de la page
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

}

// Statut du serveur
// Pour l'instant, le statut est défini ici.
// Plus tard, il pourra être modifié depuis l'administration.

const serverStatus = "ACTIF";

const statusText = document.getElementById("serverStatus");

if (statusText) {
statusText.textContent = serverStatus;
}

// Permet d'utiliser les boutons du clavier
document.addEventListener("keydown", function(event) {

```
if (event.key === "Escape") {
    showPage("accueil");
}
```

});
