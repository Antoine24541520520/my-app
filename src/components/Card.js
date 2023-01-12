import React from "react";
import { useState } from "react";

const Card = ({ carte, page }) => {

  const [nombre, setNumber] = useState(carte.nombre);

  const ajouterCarte = () => {
    let storedData = window.localStorage.cartes
    ? window.localStorage.cartes.split(",")
    : [];

    storedData.push(carte.id);
    window.localStorage.cartes = storedData;

    setNumber(prevNombre => prevNombre + 1)
  }

  const supprimerCarte = () => {
    let storedData = window.localStorage.cartes.split(",");
    let index = storedData.findIndex((carteId) => carteId==carte.id);
    storedData.splice(index,1); 
    window.localStorage.cartes = storedData;

    setNumber(prevNombre => prevNombre - 1)
  }
  
  if(page === "MonDeck" && nombre == 0){
    return;
  }

  const manaFinder = () => {
    const manaArray = [];
    // for (let i = 0; i < m.length; i++) {
    //   switch (m[i]) {
    //     case "W":
    //       manaArray.push(`white`);
    //       break;
    //     case "B":
    //       manaArray.push(`black`);
    //       break;
    //     case "G":
    //       manaArray.push(`green`);
    //       break;
    //     default:
    //       console.log(`${m[i]}`);
    //   }
    // }

    return manaArray.map((genre) => <img src={"./images/manas/w.gif"} />);
  }
  
  return (
    <div className="card">
      <img
        className={"carte_image"}
        src={
          carte.imageUrl ? carte.imageUrl : "./images/imageerror.png"
        }
        alt={`image carte ${carte.name}`}
      />
      <h2>{carte.name}</h2>
     

      <ul>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/b.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/b.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/b.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/b.gif"} alt=""/></span>
        <span><img className="mana_image" src={"./images/manas/w.gif"} alt=""/></span>
      </ul>

      <h3>Dans le deck: <span>{nombre}</span></h3>
      <h3>Description</h3>
      <p>{carte.text ? carte.text : "No Description"}</p>

      <div className={`btn ajouter ${(0 <= nombre && nombre < 4) ? ("enabled") : ("disabled")}`}
      onClick={
        (0 <= nombre && nombre < 4) ? 
        () => {
          ajouterCarte();
        } : 
        null
      }
      >
        Ajouter du deck
      </div>


      <div className={`btn supprimer ${(0 < nombre) ? ("enabled") : ("disabled")}`}
      onClick={
        (0 < nombre) ? 
        () => {
          supprimerCarte();
        } : 
        null
      }
      >
        Supprimer du deck
      </div>
      
    </div>
  );
};

export default Card;
