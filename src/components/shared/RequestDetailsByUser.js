import React from "react";
import Header from "./Header";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";

const RequestDetailsByUser = () => {
  let { requestId } = useParams();

  const [request, setRequest] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8080/api/v1/request/${requestId}`)
      .then((res) => res.json())
      .then((result) => {
        setRequest(result);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div id="requestDetails" className="rectangle-list">
      <Header title="Request details" />
      <h3> Request id: {request.requestId}</h3>
      <h3> Request title: {request.title}</h3>
      <h3> Max salary rate: {request.payment}</h3>
      <h3> Request description: {request.description}</h3>
      <h3> Request published on: {request.publishedOn}</h3>
      <h3> {request.archived ? "Request archived" : "Request active"}</h3>
      <h3> Service category id: {request.serviceCategoryId}</h3>
      <h3> Post code: {request.postCode}</h3>
      <h3>
        {" "}
        Day and time slot: {request.daySlot} {request.timeSlot}
      </h3>
      <h3> User id: {request.userId}</h3>
      <h3>
        {" "}
        {request.handymanId
          ? "Matching offer handyman details"
          : "No matching offer handyman details yet"}
      </h3>
      <h3>
        {" "}
        {request.confirmed
          ? "Matching offer confirmed"
          : "No matching offer confirmed yet"}{" "}
      </h3>
      <div className="btnContainer">
        <Button
          text={"Show matching offers"}
          onClick={console.log("show matching offers")}
        />
        <Button
          text={"Back to my requests"}
          onClick={() => {
            navigate("/my-posts");
          }}
        />
      </div>
    </div>
  );
};

export default RequestDetailsByUser;
