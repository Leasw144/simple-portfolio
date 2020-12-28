import React from "react";
import "./Gallery.scss";

export default function Gallery({img, github}) {
  let stock = 0;
  const groupedImg = img.map((image) => {
    stock++;
    console.log("stock", stock);
    return (
      <figure key={stock} className={`gallery__item gallery__item--${stock}`}>
        <img src={image} alt="first" className="gallery__img" />
      </figure>
    );
  });
  

  return (
    <div>
      <figure className="display">
        <div className="gallery">
          {/* <figure className="gallery__item gallery__item--1">
                <img src={img} alt="first" className="gallery__img" />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <img src={img} alt="second" className="gallery__img" />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <img src={img} alt="third" className="gallery__img" />
              </figure> */}
          {groupedImg}
        </div>
        <figcaption>
          <a href={github} target="_blank" rel="noopener noreferrer">
            link to github
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
