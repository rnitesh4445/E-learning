import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.js";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteVideo() {
  const { video, setVideo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const videosData = video[0]?.videos || [];
  const selectedVideo = videosData.find((v) => v.id === id);

  const handleDelete = async () => {
    if (!selectedVideo) return;

    try {
      // Delete request (mockapi usually supports DELETE)
      await axios.delete(
        `https://68fdb7037c700772bb11bd32.mockapi.io/dbjson/library/${selectedVideo.id}`
      );

      // Update context state
      setVideo((prev) => {
        const newVideo = [...prev];
        newVideo[0].videos = newVideo[0].videos.filter((v) => v.id !== id);
        return newVideo;
      });

      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/admin-dashboard");
  };

  if (!selectedVideo)
    return <p className="text-center mt-5">Video not found.</p>;

  return (
    <div className="delete-overlay d-flex align-items-center justify-content-center vh-100 bg-dark bg-opacity-50">
      <div className="card p-4" style={{ maxWidth: "500px" }}>
        <div className="ratio ratio-16x9 mb-3">
          <iframe
            src={selectedVideo.url}
            title={selectedVideo.title}
            frameBorder="0"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
        <h5 className="mb-3 text-center">
          Are you sure you want to delete "{selectedVideo.title}"?
        </h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteVideo;
