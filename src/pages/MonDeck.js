import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import axios from "axios";
import Card from "../components/Card";
import { cleanup } from "@testing-library/react";

const MonDeck = () => {
  const [cartesData, setListData] = useState([]);

  useEffect(() => {
    let cartesId = window.localStorage.cartes
      ? window.localStorage.cartes.split(",").join("|")
      : [];

    if(cartesId.length !== 0){
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
      <Form page={"MonDeck"} cartes={cartesData}/>
    </div>
  );
};

export default MonDeck;
