import React from "react";
import { useState } from "react";

const Card = ({ carte, page }) => {
  const [nombre, setNumber] = useState(carte.nombre);

  const ajouterCarte = () => {
    let storedData = window.localStorage.cartes?.split(",") || [];
    storedData.push(carte.id);
    window.localStorage.cartes = storedData;
    setNumber(prevNombre => prevNombre + 1);
  };

  const supprimerCarte = () => {
    let storedData = window.localStorage.cartes.split(",");
    let index = storedData.findIndex(carteId => carteId === carte.id);
    storedData.splice(index, 1);
    window.localStorage.cartes = storedData;
    setNumber(prevNombre => prevNombre - 1);
  };

  if (page === "MonDeck" && nombre === 0) return;

  const manaFinder = () =>
    carte.manaCost
      .replaceAll("{", "")
      .toLowerCase()
      .split("}")
      .slice(0, -1)
      .map(unMana => (
        <span>
          <img
            className="mana_image"
            src={`./images/manas/${unMana}.gif`}
            alt="Image mana"
          />
        </span>
      ));

  return (
    <div className="card">
       <img
        className="carte_image"
        src={carte.imageUrl || "./images/imageerror.png"}
        alt={`image carte ${carte.name}`}
      />
      <h2>{carte.name}</h2>
      
      <ul>
      {carte.manaCost ? manaFinder() : "Pas de mana"} 
      </ul>

      <h3>Dans le deck: <span>{nombre}</span></h3>
      
      <h3>Type</h3>
      <p>{carte.type || "No Type"}</p>

      <div className={`btn ajouter ${nombre < 4 ? "enabled" : "disabled"}`} onClick={nombre < 4 ? ajouterCarte : null}>
        Ajouter au deck
      </div>

      <div className={`btn supprimer ${nombre > 0 ? "enabled" : "disabled"}`} onClick={nombre > 0 ? supprimerCarte : null}>
        Supprimer du deck
      </div>
    </div>
  );
};

export default Card;