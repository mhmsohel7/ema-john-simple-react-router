import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { name, quantity, id, img, price } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-info">
        <p className="product-title">{name}</p>
        <p>
          Price : <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button className="btn-delete" onClick={() => handleRemoveFromCart(id)}>
        <FontAwesomeIcon className="red-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
<h2>Review page</h2>;
