import React, { Component } from 'react';
import Lightbox from 'react-images';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: props.currentImage,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  // TODO change it
  componentWillReceiveProps(nextProps) {
    this.setState({
      lightboxIsOpen: nextProps.lightboxIsOpen,
      currentImage: nextProps.currentImage,
    });
  }

  gotoPrevious() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }));
  }

  gotoNext() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }));
  }

  openLightbox() {
    this.setState({
      lightboxIsOpen: true,
    });
  }

  // TODO remove it
  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
    });
    this.props.closeLightbox();
  }

  render() {
    return (
      <Lightbox
        images={this.props.images}
        currentImage={this.state.currentImage}
        isOpen={this.state.lightboxIsOpen}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClose={this.closeLightbox}
      />
    );
  }
}
