import React, { useState, useEffect, useCallback } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  // comme l'api que j'utilise est lente, je fais la recherche uniquement sur le clic du bouton rechercher. 
  // Sinon j'utiliserais "onChange={(e) => setSearch(e.target.value)}" sur l'input "search-input"

  const [cartesData, setCartesData] = useState([]);
  const [search, setSearch] = useState("code");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSearch(document.getElementById("search-input").value);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.magicthegathering.io/v1/cards?name=${search}`)
      .then((res) => {
        setCartesData(res.data.cards);
        setIsLoading(false);
      });
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
            />
            <input type="submit" value="Rechercher" onClick={handleSubmit} />
          </form>
        </div>
        <br />
        {isLoading ? (
          <h1 className="info">Chargement des données...</h1>
        ) : (
          <Form page={"Accueil"} cartes={cartesData} />
        )}
      </div>
    </div>
  );
};

export default Home;