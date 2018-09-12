import React, { Component } from "react";

import {GalleryContainer, MainImg, Img1, Img2, Img3} from './Gallery.style'

export default class Gallery extends Component {

  render() {
      const images = ['https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg','https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg','https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg','https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg'];
    return (
      <GalleryContainer>
        <MainImg src={images[0]} alt="main image"/>
        <Img1 src={images[1]} alt="alternate image 1"/>
        <Img2 src={images[2]} alt="alternate image 2"/>
        <Img3 src={images[3]} alt="alternate image 3"/>
      </GalleryContainer>
    );
  }
}
