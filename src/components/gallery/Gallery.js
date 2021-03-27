import React, { Component } from "react";
import Lightbox from 'react-image-lightbox'
import "./Gallery.scss";
import "react-image-lightbox/style.css";
import "../projects/Projects.scss";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
    console.log('THIS IS SUPPOSED TO BE IMAGE 1', props)
  }

  makeThumbs() {
    let stock = 0;
    return this.props.img.map((image) => {
      stock++;

      return (
        <figure
          key={stock}
          className={`gallery__item gallery__item--${stock}`}
          onClick={() => this.setState({ isOpen: true })}
        >
          <img src={image} alt="first" className="gallery__img" />
        </figure>
      );
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {/* <figure className="display" > */}
          <div className="gallery" >
            {this.makeThumbs(this.props)}
          </div>
        {/* </figure> */}
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          testing
        </button> */}
        {isOpen && (
          <Lightbox
            mainSrc={this.props.img[photoIndex]}
            nextSrc={this.props.img[(photoIndex + 1) % this.props.img.length]}
            prevSrc={this.props.img[(photoIndex + this.props.img.length - 1) % this.props.img.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.img.length,
              })
            }
            onMovePrevRequest={() => 
              this.setState({
                photoIndex: (photoIndex + this.props.img.length - 1) % this.props.img.length
              })
            }
          />
        )}
      </div>
    );

  }
  // let stock = 0;
  // const groupedImg = img.map((image) => {
  //   stock++;
  //   console.log("stock", stock);
  //   return (
  //     <figure key={stock} className={`gallery__item gallery__item--${stock}`}>
  //       <img src={image} alt="first" className="gallery__img" />
  //     </figure>
  //   );
  // });
  

  // return (
  //   <div>
  //     <figure className="display">
  //       <div className="gallery">
  //         {/* <figure className="gallery__item gallery__item--1">
  //               <img src={img} alt="first" className="gallery__img" />
  //             </figure>
  //             <figure className="gallery__item gallery__item--2">
  //               <img src={img} alt="second" className="gallery__img" />
  //             </figure>
  //             <figure className="gallery__item gallery__item--3">
  //               <img src={img} alt="third" className="gallery__img" />
  //             </figure> */}
  //         {groupedImg}
  //       </div>
  //       <figcaption>
  //         <a href={github} target="_blank" rel="noopener noreferrer">
  //           link to github
  //         </a>
  //       </figcaption>
  //     </figure>
  //   </div>
  // );
}
