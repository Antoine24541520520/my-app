import React from "react";

const Card = ({ carte, ajouterCarte, supprimerCarte, nbCartes }) => {

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
      <h3>Dans le deck: <span>{nbCartes}</span></h3>
      <h3>Description</h3>
      <p>{carte.text ? carte.text : "No Description"}</p>

      <div className={`btn ajouter ${(0 <= nbCartes && nbCartes < 4) ? ("enabled") : ("disabled")}`}
      onClick={
        (0 <= nbCartes && nbCartes < 4) ? 
        () => {
          ajouterCarte(carte.id);
        } : 
        null
      }
      >
        Ajouter du deck
      </div>


      <div className={`btn supprimer ${(0 < nbCartes) ? ("enabled") : ("disabled")}`}
      onClick={
        (0 < nbCartes) ? 
        () => {
          supprimerCarte(carte.id);
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
