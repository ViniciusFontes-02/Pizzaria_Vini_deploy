import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default function Product({
  id,
  image,
  name,
  rate,
  price,
  addProductToCart,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} className="img-products" />

      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
        <span>R$ </span>
        {price},00
      </p>

      <div className="buttons">
        <button className="btn-icon" onClick={() => addProductToCart(id)}>
          <span>Adicionar ao carrinho!</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
