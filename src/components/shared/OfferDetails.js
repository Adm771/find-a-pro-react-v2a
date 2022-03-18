import React, { useContext } from "react";
import Header from "./Header";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";
import OfferContext from "../../contexts/OfferContextProvider";
import UserContext from "../../contexts/UserContextProvider";

const OfferDetails = () => {
  let { offerId } = useParams();
  const { offerById, getOfferById } = useContext(OfferContext);
  const { userById, getUserById } = useContext(UserContext);

  React.useEffect(() => {
    async function getOfferAndUser() {
      let offer = await getOfferById(offerId);
      console.log(offer.handymanId);
      try {
        await getUserById(offer.handymanId);
        console.log(userById);
      } catch (error) {
        console.error(error);
      }
    }
    getOfferAndUser();
  }, []);

  const navigate = useNavigate();

  return (
    <div id="offerDetails" className="rectangle-list">
      <Header title="Offer details" />
      <h3> Offer id: {offerById.offerId}</h3>
      <h3> Offer title: {offerById.title}</h3>
      <h3> Min salary rate: {offerById.payment}</h3>
      <h3> Offer description: {offerById.description}</h3>
      <h3> Offer published on: {offerById.publishedOn}</h3>
      <h3> {offerById.archived ? "Offer archived" : "Offer active"}</h3>
      <h3> Offer category id's: {offerById.serviceCategoryId}</h3>
      <h3> Post code: {offerById.postCode}</h3>
      <h3> Handyman id: {offerById.handymanId}</h3>
      <Header title="Handyman details" />
      {/* <h3> User id: {userById.userId}</h3> 
        <h3> User first name: {userById.firstName}</h3> 
        <h3> User last name: {userById.lastName}</h3> 
        <h3> User description: {userById.description}</h3> 
        <h3> User phone number: {userById.phoneNumber}</h3> 
        <h3> User email: {userById.email}</h3>  */}
      <Button
        text={"Back to all post"}
        onClick={() => {
          navigate("/all-posts");
        }}
      />
    </div>
  );
};

export default OfferDetails;
