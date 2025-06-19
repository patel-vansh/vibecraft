import React from "react";
import "./ImageCarousel.css";

const images = [
  { id: 1, src: "https://unsplash.com/photos/dMUt0X3f59Q/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzM2ODkxfA&force=true&w=640", alt: "Code 1" },
  { id: 2, src: "https://unsplash.com/photos/ieic5Tq8YMk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzM1OTM4fA&force=true&w=640", alt: "Code 2" },
  { id: 3, src: "https://unsplash.com/photos/xrVDYZRGdw4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzM2ODQyfA&force=true&w=640", alt: "Code 3" }
];

const ImageCarousel = () => {
  return (
      <div className="carousel-container">
        {images.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.src} alt={item.alt} />
            <div className="hover-overlay">
              <span>View Details</span>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ImageCarousel;
