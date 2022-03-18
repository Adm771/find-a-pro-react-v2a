import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import RequestContext from "../../contexts/RequestContextProvider";

const RequestCard = ({ request }) => {
  // const { deleteRequest } = useContext(RequestContext);

  const navigate = useNavigate();

  return (
    <>
      <div
        className="request"
        style={request.archived ? { color: "grey" } : { color: "black" }}
      >
        {/* <p> id: {request.requestId}</p>  */}
        <p> title: {request.title}</p>
        {/* <p> payment: {request.payment}</p> */}
        <p> description: {request.description}</p>
        {/* <p> publishedOn: {request.publishedOn}</p> */}
        {/* <p> archived: {request.archived}</p> */}
        {/* <p> serviceCategoryId: {request.serviceCategoryId}</p> */}
        {/* <p> postCode: {request.postCode}</p> */}
        {/* <p> day and time: {request.daySlot} {request.timeSlot}</p> */}
        {/* <p> userId: {request.userId}</p> */}
        {/* <p> handymanId: {request.handymanId}</p> */}
        {/* <p> confirmed: {request.confirmed}</p> */}
        <div>
          {request.archived && (
            <Button text={"Write review"} onClick={console.log("add reviev")} />
          )}
          <div className="btnContainer">
            <Button text={"Write to this user"} />
            <Link to={`/request/${request.requestId}`} className="btn1">
              Show request details and user details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCard;
