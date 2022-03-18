import React, { useState, useEffect, createContext } from "react";

const RequestContext = createContext();

export function RequestContextProvider({ children }) {
  const [requests, setRequests] = useState([]);
  const [requestById, setRequestById] = useState([]);
  const [requestsByUserId, setRequestsByUserId] = useState([]);

  // Get all requests
  const getRequests = async () => {
    const response = await fetch("http://localhost:8080/api/v1/requests");
    const data = await response.json();
    setRequests(data);
  };

  // Get request by id
  const getRequestById = async (requestId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/request/${requestId}`
    );
    const data = await response.json();
    setRequestById(data);
  };

  // Get requests by user id
  const getRequestsByUserId = async (userId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/requests/${userId}`
    );
    const data = await response.json();
    setRequestsByUserId(data);
  };

  // Add request
  const addRequest = async (newRequest) => {
    const response = await fetch("http://localhost:8080/api/v1/requests", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newRequest),
    });
    const data = await response.json();
    setRequests([...requests, data]);
  };

  // Delete request
  const deleteRequest = async (requestId) => {
    await fetch(`http://localhost:8080/api/v1/request/${requestId}`, {
      method: "DELETE",
    });
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  // Edit request
  const editRequest = async (requestId, editedRequest) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/request/${requestId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedRequest),
      }
    );
    const data = await response.json();
    setRequests(
      requests.map((request) => (request.id === requestId ? data : request))
    );
  };

  return (
    <RequestContext.Provider
      value={{
        requests,
        getRequests,
        requestById,
        getRequestById,
        requestsByUserId,
        getRequestsByUserId,
        addRequest,
        editRequest,
        deleteRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export default RequestContext;
