import React from "react";
import Card from "./Card";
// version npm 7.5.2

const Form = ({ page, cartes }) => {

  const initCartes = () => {
    let storedData = window.localStorage.cartes
      ? window.localStorage.cartes.split(",")
      : [];
    
    const occurrences = storedData.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    
    cartes.forEach(carte => {
      carte.nombre = typeof occurrences[carte.id] === "undefined"  ? 0 : occurrences[carte.id];
    });   
    
    console.log(cartes)
  };

  initCartes();

  return (
    <div className="result">
    {cartes.length > 0 ?
      cartes.map((carte, index) => (
        <Card carte={carte} page={page} key={index} />
      )) :
      <h1>No card</h1>
    }
  </div>
  );
};

export default Form;
