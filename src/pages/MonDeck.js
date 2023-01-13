import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import axios from "axios";

const MonDeck = () => {
  const [cartesData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cartesId = window.localStorage.cartes
      ? window.localStorage.cartes.split(",").join("|")
      : [];

    if (cartesId.length !== 0) {
      setIsLoading(true);
      axios
        .get(
          `https://api.magicthegathering.io/v1/cards?id=${cartesId}`
        )
        .then((res) => {
          setListData(res.data.cards);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      {isLoading ? <h1 className="info">Chargement des données...</h1> :  cartesData.length !== 0 ? <Form page={"MonDeck"} cartes={cartesData}/> :<h1 className="info">Aucune carte dans le deck</h1>}
    </div>
  );
};

export default MonDeck;