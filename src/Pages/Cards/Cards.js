import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = () => {
  const cards = useSelector((state) => state.card.cards);
  console.log("cards:", cards);
  return (
    <div
    //   style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
    >
      <h1>Cards List</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/cards/new">
          <button type="button" className="btn btn-success btn-md">
            Add
          </button>
        </Link>
      </div>
      {(cards || []).map((item) => (
        <div className="d-flex align-items-center justify-content-center text-center h-50">
          <div className="card cardemp p-2">
            <Link to={`cards/${item.id}`}>
              <h5 className="text-white">
                {item.firstName + " " + item.lastName}
              </h5>
            </Link>
          </div>
        </div>
      ))}
      {!cards?.length && (
          <div className="d-flex align-items-center justify-content-center text-center h-50">
          <div className="card cardemp p-2">
              <h5 className="text-white">
                Please Add Cards
              </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
