import React, { useState } from "react";
import Button from "../../components/shared/Button";
import OfferList from "../../components/shared/OfferList";
import RequestList from "../../components/shared/RequestList";

function AllPosts() {
  const [showOffers, setShowOffers] = useState(false);

  const onClick = () => {
    setShowOffers((prevState) => !prevState);
  };

  return (
    <>
      {/* <div>THIS IS ALL POSTS PAGE</div> */}
      <div className="btnContainer">
        <Button
          text={!showOffers ? "Show all offers" : "Show all requests"}
          onClick={onClick}
        />
      </div>
      {!showOffers && <RequestList />}
      {showOffers && <OfferList />}
    </>
  );
}

export default AllPosts;
