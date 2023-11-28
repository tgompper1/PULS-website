import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      {/* <div className="img-div"> */}
        <img src={imgUrl} alt={imgTitle}></img>
        {/* </div> */}
    </div>
  );
}