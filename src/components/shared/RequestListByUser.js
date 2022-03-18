import React, { useContext } from "react";
import RequestCardByUser from "./RequestCardByUser";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContextProvider";
import RequestContext from "../../contexts/RequestContextProvider";

const RequestListByUser = () => {
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
        {requestsByUserId.map((request) => (
          <RequestCardByUser key={request.requestId} request={request} />
        ))}
      </div>
    </>
  );
};

export default RequestListByUser;
