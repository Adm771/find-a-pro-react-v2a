import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button";
import RequestListByUser from "../shared/RequestListByUser";

function MyPosts() {
  let navigate = useNavigate();

  return (
    <>
      {/* <div>THIS IS MY POST PAGE</div> */}
      <Button
        text="Add request or offer"
        onClick={() => {
          navigate("/add-post");
        }}
      />
      <RequestListByUser />
    </>
  );
}

export default MyPosts;
