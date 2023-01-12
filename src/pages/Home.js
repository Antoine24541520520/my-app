import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [cartesData, setCartesData] = useState([]);
  const [search, setSearch] = useState("Starlight Invoker");

  useEffect(() => {
    axios
    .get(
        `https://api.magicthegathering.io/v1/cards?name=${search}`  
    )
    .then((res) => setCartesData(res.data.cards));
  }, [search]);
  
  return (
    <div className="home-page">
      <Header />
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
        <Form page={"Accueil"} cartes={cartesData}/>
      </div>
    </div>
  );
};

export default Home;
