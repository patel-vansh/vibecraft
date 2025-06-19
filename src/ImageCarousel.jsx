import React from "react";
import "./ImageCarousel.css";

const images = [
  { id: 1, src: "https://unsplash.com/photos/164_6wVEHfI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzMxNDM4fA&force=true&w=640", alt: "Shoes" },
  { id: 2, src: "https://unsplash.com/photos/164_6wVEHfI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzMxNDM4fA&force=true&w=640", alt: "Bag" },
  { id: 3, src: "https://unsplash.com/photos/164_6wVEHfI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzMxNDM4fA&force=true&w=640", alt: "Watch" },
  { id: 4, src: "https://unsplash.com/photos/164_6wVEHfI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzMxNDM4fA&force=true&w=640", alt: "T-shirt" },
  { id: 5, src: "https://unsplash.com/photos/164_6wVEHfI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwMzMxNDM4fA&force=true&w=640", alt: "Jacket" },
];

const ImageCarousel = () => {
  return (
      <div className="carousel-container">
        {images.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.src} alt={item.alt} />
            <div className="hover-overlay">
              <span>Add to Cart</span>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ImageCarousel;
