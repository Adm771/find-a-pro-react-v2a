import React, { useState, useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContextProvider";
import OfferContext from "../../contexts/OfferContextProvider";

const FormAddOffer = () => {
  const { loggedUser } = useContext(UserContext);
  const { addOffer } = useContext(OfferContext);

  const [title, setTitle] = React.useState();
  const [payment, setPayment] = React.useState();
  const [description, setDescription] = React.useState();
  //date and time has to be in this format
  const [publishedOn, setPublishedOn] = React.useState("2007-12-03T10:15:30");
  const [archived, setArchived] = React.useState(false);
  const [serviceCategoryId, setServiceCategoryId] = React.useState([]);
  const [handymanId, setHandymanId] = React.useState("");
  const [postCode, setPostCode] = React.useState();

  // will be changed to serviceContext
  const [listOfServiceCategories, setListOfServiceCategories] = React.useState(
    []
  );
  React.useEffect(() => {
    fetch("http://localhost:8080/api/v1/services")
      .then((res) => res.json())
      .then((result) => {
        setListOfServiceCategories(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getServicesFromList = () => {
    listOfServiceCategories.map((service) => {
      console.log(service);
      return (
        <option key={service.id} value={service.id}>
          {service.name}
        </option>
      );
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newOffer = {
      title: title,
      payment: payment,
      description: description,
      publishedOn: publishedOn,
      archived: archived,
      serviceCategoryId: serviceCategoryId,
      postCode: postCode,
      handymanId: handymanId,
    };
    console.log(newOffer);

    addOffer(newOffer);

    navigate("/my-posts");
  };

  let navigate = useNavigate();

  return (
    <div id="addOffer" className="container">
      <form>
        <div className="form-control">
          <input
            type="text"
            placeholder="Set title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <select
            name="add-service"
            value={serviceCategoryId}
            onChange={(e) => setServiceCategoryId(e.target.value)}
          >
            <option value="" disabled hidden default>
              Set service
            </option>
            {listOfServiceCategories.map((serviceCategory) => (
              <option key={serviceCategory.id} value={serviceCategory.id}>
                {serviceCategory.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="Set min salary"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Set post code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="textarea"
            placeholder="Availability description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="btn"
          onClick={onSubmit}
          style={{ background: "#1888ff", textAlign: "center" }}
        />
        <Button
          text={"Cancel"}
          onClick={() => {
            navigate("/my-posts");
          }}
        />
      </form>
    </div>
  );
};

export default FormAddOffer;
