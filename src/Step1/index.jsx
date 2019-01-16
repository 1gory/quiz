import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Brands from './Brands';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 620px;
`;

const RowWrapper = styled.div`
  // margin-bottom: 150px;
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  text-align: center;
  cursor: pointer;
  padding: 30px 30px 0 30px;
  background: ${({ selected }) => (selected ? '#f7f6f5' : 'inherit')}; 
`;

const BandLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  height: 50px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: normal;
`;

const Subtible = styled.div`
  text-align: center;
`;

const BrandLogo = styled.img`
  max-height: 50px;
  max-width: 100px;
`;

const BrandName = styled.span`
  font-weight: 500;
  font-size: 14px;
  padding: 20px 0;
`;

const Button = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 3px;
`;

const StepButtonsWrapper = styled.div`
  display: flex;
`;

const StepButton = styled.button`
  background-color: #ff181f;
  cursor: pointer;
  padding: 30px;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

const PrevButton = styled(StepButton)`
  border-radius: 3px 0 0 0;
`;
const NextButton = styled(StepButton)`
  border-radius: 0 3px 0 0;
`;

const Brand = ({ logo, name, handleClick, selected }) => (
  <Col xs={2} sm={2} md={2} lg={2}>
    <BrandWrapper selected={selected === name} onClick={() => (handleClick(name))}>
      <BandLogoWrapper>
        <BrandLogo src={logo} />
      </BandLogoWrapper>
      <BrandName>{name}</BrandName>
    </BrandWrapper>
  </Col>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'iPhone',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({ selected: name });
  }

  render() {
    const { selected } = this.state;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 1}>
        <Title>Выберите производителя</Title>
        <Subtible>В наличии чехлы на все модели</Subtible>
        <RowWrapper>
          <Row>
            {Brands.map((brand, i) => (
              <Brand
                key={i}
                name={brand.name}
                logo={brand.logo}
                selected={selected}
                handleClick={this.handleClick}
              />
            ))}
          </Row>
        </RowWrapper>
        <Button>
          <StepButtonsWrapper>
            <PrevButton onClick={toPrevStep}>Назад</PrevButton>
            <NextButton onClick={toNextStep}>Вперед</NextButton>
          </StepButtonsWrapper>
        </Button>
      </Wrapper>
    );
  }
}
