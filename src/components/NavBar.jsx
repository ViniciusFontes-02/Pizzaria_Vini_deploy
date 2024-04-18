import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./NavBar.css";

import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function NavBar({ setShowCart, selectedProducts }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          {
            <Link to="/">
              VINI<span>PIZZA</span>
            </Link>
          }
        </h1>

        <nav className={`${show ? "show" : ""}`}>
          <ul>
            <li>{<Link to="/">Home</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/products">Cardapio</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/about">Sobre</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/location">Localização</Link>}</li>
          </ul>
        </nav>

        <div className="navs-icon-container">
          {/* <div className="search-input-container">
            <input type="search" placeholder="Procurar" />

            <FontAwesomeIcon icon={faSearch} />
          </div> */}

          <button className="cart" onClick={() => setShowCart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />

            <div className="products-count">{selectedProducts.length}</div>
          </button>

          <button className="menu-btn" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
