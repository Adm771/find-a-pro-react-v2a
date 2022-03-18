import React, {useState} from "react";
import Button from "../../components/shared/Button";
import FormAddRequest from "../shared/FormAddRequest";
import FormAddOffer from "../shared/FormAddOffer";

export default function AddPost() {
  const [showOffer, setShowOffer] = useState(false);

  const onClick = () => {
    setShowOffer((prevState) => !prevState);
  };

  return (
    <>
      {/* <div>THIS IS ADD POST PAGE</div> */}
      <div className="btnContainer">
        <Button
          text={!showOffer ? "Show add offer form" : "Show add request form"}
          onClick={onClick}
        />
      </div>
      {!showOffer && <FormAddRequest />}
      {showOffer && <FormAddOffer />}
    </>
  );
}
