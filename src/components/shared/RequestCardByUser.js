import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import RequestContext from "../../contexts/RequestContextProvider";

const RequestCardByUser = ({ request }) => {
  const { deleteRequest } = useContext(RequestContext);

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
            <Link to={`/request/edit/${request.requestId}`} className="btn1">
              Edit request details
            </Link>
            <Button
              text={"Delete request"}
              onClick={() => deleteRequest(request.requestId)}
            />
            <Link to={`/request/user/${request.requestId}`} className="btn1">
              Show request details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCardByUser;
