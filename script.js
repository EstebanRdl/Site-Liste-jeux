// Charger le fichier JSON
fetch("games.json")
  .then(response => response.json())
  .then(data => {
    afficherJeux(data);

    // Recherche
    document.getElementById("search").addEventListener("input", (e) => {
      const valeur = e.target.value.toLowerCase();

      const filtres = data.filter(jeu =>
        jeu.nom.toLowerCase().includes(valeur)
      );

      afficherJeux(filtres);
    });
  });

function afficherJeux(jeux) {
  const container = document.getElementById("game-list");
  container.innerHTML = "";

  jeux.forEach(jeu => {
    const card = document.createElement("div");
    card.classList.add("game");

    card.innerHTML = `
      <img src="images/${jeu.image}.jpeg" alt="${jeu.nom}">
      <p>${jeu.nom}</p>
    `;

    container.appendChild(card);
  });
}
