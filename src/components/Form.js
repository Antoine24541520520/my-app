import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
// version npm 7.5.2

const Form = () => {
  const [cartesData, setCartesData] = useState([]);
  const [search, setSearch] = useState("Starlight Invoker");
  var cartesDeck;

  useEffect(() => {
    axios
    .get(
        `https://api.magicthegathering.io/v1/cards?name=${search}`  
    )
    .then((res) => setCartesData(res.data.cards));
  }, [search]);

  const ajouterCarte = (id) => {
    let storedData = window.localStorage.cartes
    ? window.localStorage.cartes.split(",")
    : [];

    storedData.push(id);
    window.localStorage.cartes = storedData;

    cartesDeck.push(id)
  }

  const supprimerCarte = (id) => {
    let index = cartesDeck.findIndex((carteId) => carteId==id);
    cartesDeck.splice(index,1); 

    let storedData = window.localStorage.cartes.split(",");
    index = storedData.findIndex((carteId) => carteId==id);
    storedData.splice(index,1); 
    window.localStorage.cartes = storedData;
  }

  const nbOccurencesCarte = (id) => {
    let count = 0;
    cartesDeck.forEach(carteId => {
      if(carteId == id){
        count++;
      }
    })
    return count;
  }

  const initCartes = () => {
    let storedData = window.localStorage.cartes
      ? window.localStorage.cartes.split(",")
      : [];

    cartesDeck = storedData;
  };

  initCartes();

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le nom d'une carte"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="result">
        {
        cartesData.map((carte) => (
            <Card carte={carte} supprimerCarte={supprimerCarte} ajouterCarte={ajouterCarte} nbOccurencesCarte={nbOccurencesCarte} key={carte.id} />
          ))}
      </div>
    </div>
  );
};

export default Form;
