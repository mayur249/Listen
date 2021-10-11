import React from "react";
import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const App = () => {
  return (
    <div className="root">
      <div className="container">
        <LazyLoadImage
          src={process.env.PUBLIC_URL + "/assets/playerImage1.jpg"}
          className="image"
        />
        <div className="song-info">
          <h1>Late Truth</h1>
          <p>Random</p>
        </div>
        <div>
          <input type="range" min="0" max="100" className="input-range" />
        </div>
        <div className="controller">
          <svg
            className="btn"
            fill="#fff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="btn-play"
            fill="#fff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="btn"
            fill="#fff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
