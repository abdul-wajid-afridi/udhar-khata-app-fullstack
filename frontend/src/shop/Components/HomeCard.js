import React from "react";
import "../styles/HomeCard.css";
import { base_url } from "../Config/UrlConfig";
const HomeCard = ({
  onClick,
  customerName,
  address,
  cnicNo,
  customerPic,
  phoneNo1,
  customerOccupation,
  remainingAmount,
}) => {
  return (
    <div className="home__card">
      <img
        onClick={onClick}
        src={`${base_url}/${customerPic}`}
        alt={customerName}
      />
      <div className="home__card__text">
        <h2>{customerName}</h2>
        <h3>{customerOccupation}</h3>
        <h4>{address}</h4>
        <p>{cnicNo}</p>
        <p>{phoneNo1}</p>
        <h4>{remainingAmount}</h4>
      </div>
    </div>
  );
};

export default HomeCard;
