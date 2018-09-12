import React, { Component } from "react";

import {GalleryContainer, MainImg, Img1, Img2, Img3} from './Gallery.style'

export default class Gallery extends Component {
  render() {
    return (
      <GalleryContainer>
        <MainImg src='https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg' alt="main image"/>
        <Img1 src='https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg' alt="alternate image 1"/>
        <Img2 src='https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg' alt="alternate image 2"/>
        <Img3 src='https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg' alt="alternate image 3"/>
      </GalleryContainer>
    );
  }
}
