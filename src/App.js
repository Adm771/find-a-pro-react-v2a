import React from "react";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Explore from "./components/pages/Explore";
import LogIn from "./components/pages/LogIn";
import MyProfile from "./components/pages/MyProfile";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
import AddPost from "./components/pages/AddPost";
import MyPosts from "./components/pages/MyPosts";




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
