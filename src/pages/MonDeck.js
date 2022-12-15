import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import { cleanup } from "@testing-library/react";

const MonDeck = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    
    let cartesId = window.localStorage.cartes
      ? window.localStorage.cartes.split(",").join("|")
      : [];

    if(cartesId.length !== 0){
      console.log(`https://api.magicthegathering.io/v1/cards?id=${cartesId}`)
    axios
      .get(
        `https://api.magicthegathering.io/v1/cards?id=${cartesId}`
      )
      .then((res) => setListData(res.data.cards));
      }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Mon Deck
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((carte) => <Card carte={carte} key={carte.id}/>)
        ) : (
          <h2>Aucune carte pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default MonDeck;
