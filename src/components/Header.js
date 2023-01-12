import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MonDeck"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Mon Deck
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>Magic Cards</h1>
    </div>
  );
};

export default Header;
