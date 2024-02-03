import React from "react";
import "./cartItemCard.scss";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <Link className="link">
      <div className="CartItemCard">
        <Link to={`/product/${item.product}`} className="link">
          <img src={item.image} alt="ssa" />
        </Link>
        <div>
          <Link to={`/product/${item.product}`} className="link">
            <p>{item.name}</p>
          </Link>
          <span>{`Price: ₹${item.price}`}</span>
          <span onClick={() => deleteCartItems(item.product)}>Remove</span>
        </div>
      </div>
    </Link>
  );
};

export default CartItemCard;
