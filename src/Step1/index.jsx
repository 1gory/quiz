import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from '../generic/StepTitle';
import BrandsList from './BrandsList';
import Brand from './Brand';
import CustomBrand from './CustomBrand';
import StepButtons from '../generic/StepButtons';

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

const RowWrapper = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding-top: 20px;
  
  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;

const Subtible = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 14px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBrands: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.isNextStepAllowed = this.isNextStepAllowed.bind(this);
    this.changeCustomBrand = this.changeCustomBrand.bind(this);
  }

  handleClick(name) {
    const { selectedBrands, customBrand } = this.state;
    const index = selectedBrands.indexOf(name);
    if (index === -1) {
      name && selectedBrands.push(name);
    } else {
      selectedBrands.splice(index, 1);
    }

    this.setState({ selectedBrands }, () => {
      this.props.onChange(selectedBrands.concat([customBrand]));
    });
  }

  isNextStepAllowed() {
    return this.state.selectedBrands.length !== 0 || this.state.customBrand;
  }

  changeCustomBrand(value) {
    this.setState({
      customBrand: value,
    }, () => {
      const { selectedBrands, customBrand } = this.state;
      this.props.onChange(selectedBrands.concat([customBrand]));
    });
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
            {BrandsList.map((brand, i) => (
              <Col xs={6} sm={2} md={2} lg={2}>
                <Brand
                  key={i}
                  name={brand.name}
                  logo={brand.logo}
                  selected={selected}
                  handleClick={this.handleClick}
                />
              </Col>
            ))}
            <Col xs={12} sm={2} md={2} lg={2}>
              <CustomBrand
                selected={selected}
                handleClick={this.handleClick}
                onChange={this.changeCustomBrand}
              />
            </Col>
          </Row>
        </RowWrapper>
        <StepButtons
          disabled={!this.isNextStepAllowed()}
          toPrevStep={toPrevStep}
          toNextStep={toNextStep}
        />
      </Wrapper>
    );
  }
}
