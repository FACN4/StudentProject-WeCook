import React, { Component } from "react";
import PropTypes from 'prop-types';

import {GalleryContainer, MainImg, Img1, Img2, Img3} from './Gallery.style'

class Gallery extends Component {
  state = {
    pics:[]
   };

  componentDidMount () {
    const {images} = this.props
    // order images correctly
    const pics = images.reduce((acc, obj) => {
      if (obj.isThumbnail) {
        return [obj.imageUrl,...acc];
      } else {
        return [...acc,obj.imageUrl];
      }
    },[])
    this.setState(() => ({
      pics
    }));
  }
  switchPictures = event => {
    const {src, id} = event.target
    this.setState(({pics}) => {
      const reOrderPics = [...pics];
      reOrderPics[id] = pics[0]
      reOrderPics[0] = src;
      return {pics: reOrderPics}
    });
  }

  render() {
    const {pics} = this.state
    return (
      <GalleryContainer>
        <MainImg src={pics[0]} alt="main image" data-testid="largeImg"/>
        <Img1 onClick={this.switchPictures} src={pics[1]} id={1} alt="alternate image 1" data-testid="smallImg"/>
        <Img2 onClick={this.switchPictures} src={pics[2]} id={2} alt="alternate image 2"/>
        <Img3 onClick={this.switchPictures} src={pics[3]} id={3} alt="alternate image 3"/>
      </GalleryContainer>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
