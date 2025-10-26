import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext.js";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useCookies } from "react-cookie";

function User_dashboard() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["user_id"]);

  useEffect(() => {
    if (!cookies["user_id"]) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const { fil } = useContext(UserContext);

  return (
    <div className="container-fluid">
      <Header />
      <div
        className="row g-2 p-2"
        style={{ backgroundColor: "gray", minHeight: "89vh" }}
      >
        {fil && fil.length > 0 ? (
          fil.map((item) => <Card key={item.id} video={item} />)
        ) : (
          <p className="text-center mt-5">No videos available.</p>
        )}
      </div>
    </div>
  );
}

export default User_dashboard;
