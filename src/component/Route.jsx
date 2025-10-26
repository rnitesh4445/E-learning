import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Header from "./Header.jsx";
import UserLogin from "./User/User_login.jsx";

import UserDashboard from "./User_dashboard.jsx";
import Home from "../Home.jsx";
import AdminLogin from "./Admin/Admin_login.jsx";
import AdminDashboard from "./Admin/Admin_dashboard.jsx";
import EditVideo from "./Admin/Edit_video.jsx";
import DeleteVideo from "./Admin/DeleteVideo.jsx";
import AddVideo from "./Admin/AddVideo.jsx";
import User_signup from "./User/User_reagister.jsx";
import User_login from "./User/User_login.jsx";

const Index = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<User_login/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/user-dashboard"
            element={
              <>
                <Header /> <UserDashboard />
              </>
            }
          />
          <Route path="/sign-up" element={<User_signup/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin-dashboard/edit-video/:id"
            element={<EditVideo />}
          />
          <Route
            path="/admin-dashboard/delete-video/:id"
            element={<DeleteVideo />}
          />
          <Route path="/admin-dashboard/add-video" element={<AddVideo />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default Index;
