import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

export default function SidebarProduct({
  id,
  image,
  name,
  rate,
  price,
  removeProductToCart,
  addToCartTotal,
}) {
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button
          onClick={() => {
            removeProductToCart(id);
            addToCartTotal(-priceSum);
          }}
          className="remove-product-btn"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="details">
          <h4>{name}</h4>
          <p>R$ {price}</p>

          <input
            type="number"
            min={1}
            max={20}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              setPriceSum(e.target.value * price);
              addToCartTotal(e.target.value * price - priceSum);
            }}
          />

          {priceSum > price && (
            <p className="price-sum">
              <b>Total:</b> R$ {priceSum}
            </p>
          )}
        </div>
      </div>

      <div className="right-side">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
