import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore";
import LogIn from "./pages/LogIn";
import MyProfile from "./pages/MyProfile";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import AddPost from "./pages/AddPost";
import MyPosts from "./pages/MyPosts";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/add-post" element={<AddPost/>} />
      </Routes>
    </Router>
  );
}

export default App;
