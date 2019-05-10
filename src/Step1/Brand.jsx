import React, { Component } from 'react';
import styled from 'styled-components';

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  text-align: center;
  cursor: pointer;
  padding: 16px 30px 0 30px;
  background: ${({ selected }) => (selected ? '#f7f6f5' : 'inherit')}; 
`;

const BandLogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 100%;
`;

const BrandLogo = styled.img`
  height: 50px;
  max-width: 100px;
`;

const BrandName = styled.span`
  font-weight: 500;
  font-size: 14px;
  padding: 20px 0;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
    }));

    this.props.handleClick(name);
  }

  render() {
    const {
      logo, name, logoWidth,
    } = this.props;
    const { isSelected } = this.state;
    return (
      <BrandWrapper selected={isSelected} onClick={() => (this.handleClick(name))}>
        <BandLogoWrapper>
          <BrandLogo width={logoWidth} src={logo} />
        </BandLogoWrapper>
        <BrandName>{name}</BrandName>
      </BrandWrapper>
    );
  }
}
