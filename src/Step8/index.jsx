import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import packaging1 from './packaging1.png';
import packaging2 from './packaging2.jpg';
import packaging3 from './packaging3.jpg';
import packaging4 from './packaging4.jpg';
import check from './check.svg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  height: calc(100vh - 205px);
  
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 100px;
  }
`;

const PackagingWrappper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Check = styled.img`
  width: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  margin: auto;
  z-index: 1;
  display: none;
  
  ${({ isActive }) => isActive && `    
    display: block;
  `}
`;

const PackagingCard = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const Img = styled.img`
  width: 250px;
  
  ${({ isActive }) => isActive && `    
    opacity: 0.5;
  `}
`;

const Description = styled.p`
  width: 220px;
  height: 50px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Price = styled.span`
  font-weight: 500;
  display: inline-block;
  
  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

const Packaging = ({
  img, description, price, selected, name, onClick,
}) => (
  <PackagingCard onClick={() => (onClick(name))}>
    <Check src={check} isActive={selected === name} />
    <Img src={img} isActive={selected === name} />
    <Description>{description}</Description>
    <Price>{price}</Price>
  </PackagingCard>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState(
      { selected: value },
      () => this.props.onChange(value),
    );
  }

  render() {
    const { selected } = this.state;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 8}>
        <Title>Упаковка</Title>
        <PackagingWrappper>
          <Packaging
            img={packaging1}
            description="Упаковка с еврослотом и клеевым клапаном"
            price="Бесплатно"
            onClick={this.onClick}
            name="free"
            selected={selected}
          />
          <Packaging
            img={packaging2}
            description="Подарочная бумага"
            price="от 10 рублей"
            onClick={this.onClick}
            name="paper"
            selected={selected}
          />
          <Packaging
            img={packaging3}
            description="Коробка с европодвесом с дизайном souvenirstudio"
            price="от 15 рублей"
            name="souvenirstudio"
            onClick={this.onClick}
            selected={selected}
          />
          <Packaging
            img={packaging4}
            description="Коробка с европодвесом с Вашим дизайном"
            price="от 20 рублей"
            name="custom"
            onClick={this.onClick}
            selected={selected}
          />
        </PackagingWrappper>
        <StepButtons disabled={!selected} toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
