import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './preloader.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Fade = styled.div`
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${fadeOut} 1s linear;
  animation-delay: 1s;
  // transition: opacity 3s linear;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isHidden: true,
      });
    }, 2000);
  }

  render() {
    const { isHidden } = this.state;
    return (
      <Fade className="load" out={isHidden}>
        <div className="load__wrap">
          <div className="load__inner load__one" />
          <div className="load__inner load__two" />
          <div className="load__inner load__three" />
        </div>
      </Fade>
    );
  }
}
