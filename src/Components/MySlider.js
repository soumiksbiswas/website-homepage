import React from "react";
import "./Slide.css";
import abc from "./abc.png"

const MySlider = () => {
  return (
    <div>
      <div className="cont1">
        <div id="carouselExampleIndicators" className="carousel slide imgslide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner imgslide">
            <div className="carousel-item active imgslide">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item imgslide">
              <img
                src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item imgslide">
              <img
                src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="cont2">

        <img src={abc} alt="" className="logo"/>
        <h1 className="head">Environ Solutions</h1>
        <h3>Protect the environment with us!</h3>
        <div className="para">
        The purpose of our company is to promote environmental sustainability and protect the natural resources through its products, services or operations. This can be achieved by reducing waste, conserving energy, using environmentally friendly materials, or promoting environmental awareness. The ultimate goal is to reduce the negative impact on the environment and contribute to the creation of a more sustainable future.
        </div>
      </div>
    </div>
  );
};

export default MySlider;
