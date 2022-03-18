import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Explore from "./components/pages/Explore";
import LogIn from "./components/pages/LogIn";
import MyProfile from "./components/pages/MyProfile";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
import AddPost from "./components/pages/AddPost";
import MyPosts from "./components/pages/MyPosts";
import AllPosts from "./components/pages/AllPosts";

import { UserContextProvider } from "./contexts/UserContextProvider";
import { RequestContextProvider } from "./contexts/RequestContextProvider";
import { OfferContextProvider } from "./contexts/OfferContextProvider";

import RequestDetails from "./components/shared/RequestDetails";
import RequestDetailsByUser from "./components/shared/RequestDetailsByUser";
import OfferDetails from "./components/shared/OfferDetails";

import FormEditRequest from "./components/shared/FormEditRequest";

function App() {
  return (
    <UserContextProvider>
      <RequestContextProvider>
        <OfferContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/my-posts" element={<MyPosts />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/add-post" element={<AddPost />} />

              <Route path="/all-posts" element={<AllPosts />} />

              <Route path="/request/:requestId" element={ <RequestDetails /> } />
              <Route path="/request/user/:requestId" element={ <RequestDetailsByUser /> } />
              <Route path="/offer/:offerId" element={ <OfferDetails /> } />

              <Route path="/request/edit/:requestId" element={ <FormEditRequest /> } />
            </Routes>
          </Router>
        </OfferContextProvider>
      </RequestContextProvider>
    </UserContextProvider>
  );
}

export default App;
