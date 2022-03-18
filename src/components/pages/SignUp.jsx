import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";

import UserContext from "../../contexts/UserContextProvider";

function SignUp() {
  const { loggedUser, addUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    description: "",
  });
  const { firstName, lastName, phoneNumber, email, password, description } =
    formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    addUser(formData);
    navigate("/my-profile");
    console.log(loggedUser);
  };

  return (
    <>
      <div className="container">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              value={lastName}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              id="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <textarea
            type="textarea"
            placeholder="Description"
            id="description"
            value={description}
            onChange={onChange}
          />
          <div
            className="form-control passwordInputDiv"
            style={{ display: "flex" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className="btnContainer">
            <Link to="/forgot-password" className="btn1 forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signUpBar">
              <button className="btn signUpButton">
                {" "}
                Sign Up
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
            <Link to="/login" className="btn1 registerLink">
              Log In Instead
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
