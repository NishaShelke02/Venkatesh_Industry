import React from "react";
import "./Blogs.css";

const videos = [
  {
    id: 1,
    title: "Turmeric Processing",
    file: "/videos/turmeric.mp4",
  },
  
  {
    id: 3,
    title: "Factory Tour",
    file: "/videos/Blogs.mp4",
  },
];

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      <h2>Our Video Gallery</h2>

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video controls>
              <source src={video.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;