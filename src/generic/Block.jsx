import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import CheckPoint from './Checkpoint/index';
import Lightbox from '../Lightbox';

const RowWrapper = styled.div`
  // margin-bottom: 150px;
  margin: 8px;
`;

const Materials = styled.form`
  margin: 0 auto;
  width: fit-content;
  
  @media (max-width: 768px) {
    margin: 20px 0;
    padding-left: 35px;
    bottom: 50px;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 30px 0; 
  }
`;

const MainImage = styled.img`
  max-width: 280px;
`;

const Thumbs = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  width: fit-content;
`;

const Thumb = styled.img`
  align-self: center
  width: 60px;
  height: 60px;
  padding: 5px;
  object-fit: cover;
  cursor: pointer;
`;

const Description = styled.div`
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding: 20px; 
  }
`;

const DescriptionHeader = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const DescriptionText = styled.p`
  margin: 20px 0;
`;

const DescriptionList = styled.ul`
  list-style: none;
  
  @media (max-width: 768px) {
    padding: 0; 
  }
`;

const DescriptionListItem = styled.li`
  padding: 15px 0;
  
  &::before {
    content: "▪"; 
    color: ff181f;
    position: absolute;
  }
`;

const DescriptionListItemText = styled.span`
  display: inline-block;
  padding-left: 20px;
  
  @media (max-width: 768px) {
    // padding-left: 10px; 
  }
`;

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.handleThumbClick = this.handleThumbClick.bind(this);
  }

  handleThumbClick(i) {
    this.setState({
      lightboxIsOpen: true,
      currentImage: i,
    });
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
    });
  }

  render() {
    const {
      name, description, points, mainImg, photos, selected, type, onChange, array
    } = this.props;
    return (
      <RowWrapper>
        <Row>
          <Col sm={12} lg={3}>
            <Materials>
              {Object.keys(array).map(key => (
                <CheckPoint
                  name={type}
                  submame={array[key].submame}
                  text={array[key].name}
                  value={array[key].value}
                  onChange={onChange}
                  selected={selected}
                />
              ))}
            </Materials>
          </Col>
          <Col xs={12} lg={3}>
            <Gallery>
              <MainImage src={mainImg} />
              <Thumbs>
                {photos.map((photo, i) => (
                  <Thumb src={photo} onClick={() => (this.handleThumbClick(i))} />
                ))}
                <Lightbox
                  images={photos.map((photo, i) => ({
                    src: photo,
                  }))}
                  currentImage={this.state.currentImage}
                  lightboxIsOpen={this.state.lightboxIsOpen}
                  closeLightbox={this.closeLightbox}
                />
              </Thumbs>
            </Gallery>
          </Col>
          <Col sm={12} lg={5}>
            <Description>
              <DescriptionHeader>{ name }</DescriptionHeader>
              <DescriptionText>
                {description}
              </DescriptionText>
              <DescriptionList>
                {points.map(point => (
                  <DescriptionListItem>
                    <DescriptionListItemText>{point}</DescriptionListItemText>
                  </DescriptionListItem>
                ))}
              </DescriptionList>
            </Description>
          </Col>
        </Row>
      </RowWrapper>
    );
  }
}
