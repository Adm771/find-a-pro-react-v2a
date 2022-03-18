import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const navigate = useNavigate();

  return (
    <div className="offer">
      {/* <p> Offer id: {offer.offerId}</p>  */}
      <p> Offer title: {offer.title}</p>
      {/* <p> Min salary rate: {offer.payment}</p> */}
      <p> Offer description: {offer.description}</p>
      {/* <p> Offer published on: {offer.publishedOn}</p> */}
      {/* <p> {offer.archived ? "Offer archived" : "Offer active"}</p> */}
      {/* <p> Offer category id's: {offer.serviceCategoryId}</p> */}
      {/* <p> Post code: {offer.postCode}</p> */}
      {/* <p> Handyman id: {offer.handymanId}</p> */}
      <div className="btnContainer">
        <Button text={"Write to this user"} />
        <Button
          text={"Show offer details and user details"}
          onClick={() => {
            navigate(`/offer/${offer.offerId}`);
          }}
        />
      </div>
    </div>
  );
};

export default OfferCard;
