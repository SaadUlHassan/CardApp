import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const cardsData = useSelector((state) => state.card.cards);
  const card = cardsData?.find((item) => item.id === id || item.id === toString(id)) || {};
  return (
    <div>
      <h1>Card Detail</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/">
          <button type="button" className="btn btn-danger btn-md">
            Back
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center pt-3">
        <div className="card cardemp p-2">
          <h6 className="text-white">First Name: {card.firstName}</h6>
          <h6 className="text-white">Last Name: {card.lastName}</h6>
          <h6 className="text-white">
            Membership Tier: {card?.membershipTier}
          </h6>
          <h6 className="text-white">
            Description: {card.description ?? "N/A"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
