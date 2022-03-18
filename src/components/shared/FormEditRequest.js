import React, { useState, useContext } from "react";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import RequestContext from "../../contexts/RequestContextProvider";

const FormEditRequest = () => {
  const { requestById, getRequestById, editRequest } =
    useContext(RequestContext);
  let { requestId } = useParams();

  React.useEffect(() => {
    getRequestById(requestId);
  }, []);

  const [title, setTitle] = React.useState(requestById.title);
  const [payment, setPayment] = React.useState(requestById.payment);
  const [description, setDescription] = React.useState(requestById.description);
  const [publishedOn, setPublishedOn] = React.useState(requestById.publishedOn);
  const [archived, setArchived] = React.useState(requestById.archived);
  const [serviceCategoryId, setServiceCategoryId] = React.useState(
    requestById.serviceCategoryId
  );
  const [postCode, setPostCode] = React.useState(requestById.postCode);
  const [daySlot, setDaySlot] = React.useState(requestById.daySlot);
  const [timeSlot, setTimeSlot] = React.useState(requestById.timeSlot);
  const [userId, setUserId] = React.useState(requestById.userId);
  const [handymanId, setHandymanId] = React.useState(requestById.handymanId);
  const [confirmed, setConfirmed] = React.useState(requestById.confirmed);

  // will be changed to serviceContext
  const [listOfServiceCategories, setListOfServiceCategories] = React.useState(
    []
  );
  React.useEffect(() => {
    // endpoint needed
    fetch("http://localhost:8080/api/v1/services")
      .then((res) => res.json())
      // .then((result) => console.log(result))
      .then((result) => {
        setListOfServiceCategories(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const editedRequest = {
      title: title,
      payment: payment,
      description: description,
      serviceCategoryId: serviceCategoryId,
      postCode: postCode,
      daySlot: daySlot,
      timeSlot: timeSlot,
      userId: userId,
      handymanId: handymanId,
      confirmed: confirmed,
    };
    console.log(editedRequest);

    editRequest(requestId, editedRequest);

    navigate("/customerrequests");
  };

  // const getServicesFromList = () => {
  //     listOfServices.map((service) => {
  //         console.log(service);
  //         return (<option key={service.id} value={service.id}>{service.name}</option>)
  //     })
  // }

  let navigate = useNavigate();

  return (
    <div id="editRequest" className="container">
      <form>
        <div className="form-control">
          <input
            type="text"
            placeholder="Set title"
            value={requestById.title}
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
            type="date"
            placeholder="Set day"
            value={requestById.daySlot}
            onChange={(e) => setDaySlot(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="time"
            placeholder="Set time"
            value={requestById.timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="Set max salary rate"
            value={requestById.payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Set post code"
            value={requestById.postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="textarea"
            placeholder="Task description"
            value={requestById.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Change request details"
          className="btn1"
          onClick={onSubmit}
          style={{ textAlign: "center" }}
        />
        <Button
          text={"Cancel"}
          className="btn1"
          onClick={() => {
            navigate("/my-posts");
          }}
        />
      </form>
    </div>
  );
};

export default FormEditRequest;
