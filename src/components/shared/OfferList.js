import React, { useContext } from "react";
import OfferCard from "./OfferCard";
import Header from "./Header";
import OfferContext from "../../contexts/OfferContextProvider";

const OfferList = () => {
  const { offers, getOffers } = useContext(OfferContext);

  React.useEffect(() => {
    getOffers();
  }, []);

  return (
    <div id="allOffers" className="container">
      <Header title="All offers" />
      {offers.map((offer) => (
        <OfferCard key={offer.offerId} offer={offer} />
      ))}
    </div>
  );
};

export default OfferList;
