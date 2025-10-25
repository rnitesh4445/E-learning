import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Header from "./Header";

import User_login from "./User/User_login.jsx";
import User_signup from "./User/User_reagister.jsx";
import User_dashboard from "./User_dashboard";
import Home from "../Home.jsx";
import Admin_login from "./Admin/Admin_login.jsx";
import Admin_dashboard from "./Admin/Admin_dashboard.jsx";
import Edit_video from "./Admin/Edit_video.jsx";
import DeleteVideo from "./Admin/DeleteVideo.jsx";
import AddVideo from "./Admin/AddVideo.jsx";

 function Index() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<User_login />} />
          <Route path="/admin-login" element={<Admin_login />} />
          <Route
            path="/user-dashboard"
            element={
              <>
                <Header /> <User_dashboard />
              </>
            }
          />
          <Route path="/sign-up" element={<User_signup />} />
          <Route path="/admin-dashboard" element={<Admin_dashboard />} />
          <Route
            path="/admin-dashboard/edit-video/:id"
            element={<Edit_video />}
          />
          <Route
            path="/admin-dashboard/delete-video/:id"
            element={<DeleteVideo />}
          />
          <Route
            path="/admin-dashboard/add-video"
            element={<AddVideo/>}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default Index