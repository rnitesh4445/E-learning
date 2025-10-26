import React, { useContext } from "react";
import { UserContext } from "./context/UserContext.js";

function Card({ video }) {
  const { categories } = useContext(UserContext);

  
  const categoryName = categories.find(
    (cat) => cat.id === video.category_id
  )?.name;

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-2">
      <div className="card h-100">
        <iframe
          className="card-img-top"
          width="100%"
          height="180"
          src={video.url}
          title={video.title}
        ></iframe>
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          {video.description && (
            <p className="card-text text-truncate">{video.description}</p>
          )}
          {categoryName && (
            <p className="card-text">
              <strong>Category:</strong> {categoryName}
            </p>
          )}
          <p className="card-text mb-0">
            <small className="text-muted">
              Views: {video.views} | Likes: {video.likes} | Dislikes:{" "}
              {video.dislikes}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
