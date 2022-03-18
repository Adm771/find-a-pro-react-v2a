import React, { useContext } from "react";
import RequestCard from "./RequestCard";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContextProvider";
import RequestContext from "../../contexts/RequestContextProvider";

const RequestList = () => {
  const { loggedUser } = useContext(UserContext);
  console.log(loggedUser);
  const { requestsByUserId, getRequestsByUserId } = useContext(RequestContext);

  React.useEffect(() => {
    getRequestsByUserId(loggedUser.userId);
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <div id="requestList" className="container">
        <Header title="My requests" />
        <Button
          text="Add request"
          onClick={() => {
            navigate("/add-post");
          }}
        />
        {requestsByUserId.map((request) => (
          <RequestCard key={request.requestId} request={request} />
        ))}
      </div>
    </>
  );
};

export default RequestList;
