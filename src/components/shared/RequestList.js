import React, { useContext } from "react";
import RequestCard from "./RequestCard";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import RequestContext from "../../contexts/RequestContextProvider";

const RequestList = () => {
  const { requests, getRequests } = useContext(RequestContext);

  React.useEffect(() => {
    getRequests();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <div id="requestList" className="container">
        <Header title="All requests" />
        {requests.map((request) => (
          <RequestCard key={request.requestId} request={request} />
        ))}
      </div>
    </>
  );
};

export default RequestList;
