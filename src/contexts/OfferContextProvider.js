import React, { useState, createContext } from "react";

const OfferContext = createContext();

export function OfferContextProvider({ children }) {
  const [offers, setOffers] = useState([]);
  const [offerById, setOfferById] = useState([]);
  const [offersByUserId, setOffersByUserId] = useState([]);

  // Get all offers
  const getOffers = async () => {
    const response = await fetch("http://localhost:8080/api/v1/offers");
    const data = await response.json();
    setOffers(data);
  };

  // Get offer by id
  const getOfferById = async (offerId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/offer/${offerId}`
    );
    const data = await response.json();
    setOfferById(data);
  };

  // Get offers by user id
  const getOffersByUserId = async (userId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/offers/${userId}`
    );
    const data = await response.json();
    setOffersByUserId(data);
  };

  // Add offer
  const addOffer = async (newOffer) => {
    const response = await fetch("http://localhost:8080/api/v1/offers", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newOffer),
    });
    const data = await response.json();
    setOffers([...offers, data]);
  };

  return (
    <OfferContext.Provider
      value={{
        offers,
        getOffers,
        offersByUserId,
        getOffersByUserId,
        offerById,
        getOfferById,
        addOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
}

export default OfferContext;
