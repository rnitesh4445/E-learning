import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext.js";
import axios from "axios";

function UserContextProvider({ children }) {
  const [video, setVideo] = useState([]);
  const [user, setUser] = useState([]);
  const [fil, setFil] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://68fdb7037c700772bb11bd32.mockapi.io/dbjson/library"
        );

        const libraryData = res.data[0]; 

        setVideo(libraryData.videos || []);
        setFil(libraryData.videos || []);
        setUser(libraryData.users || []);
        setAdmin(libraryData.admin || []);
        setCategories(libraryData.categories || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{ video, setVideo, fil, setFil, user, setUser, admin, categories }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
