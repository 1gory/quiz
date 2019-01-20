import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import CheckPoint from '../generic/Checkpoint';
import qty from './qty.svg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 620px;
  
  @media(max-width: 768px) {
    height: auto;
    margin-bottom: 100px;
  }
`;

const RowWrapper = styled.div`
  @media(max-width: 768px) {
    margin: 0 8px; 
    padding: 0 20px;     
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  background-color: #f6f6f6;
  border: none;
  // color: rgba(39, 46, 64, 0.5);
`;

const CustomCountField = styled.div`
  ${({ isHidden }) => (isHidden && 'display: none;')}
`;

const CustomCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const Image = styled.img`
  position: absolute;
  width: 300px;
  bottom: 60px;
  right: 50px;
  
  @media(max-width: 768px) {
    display: none;  
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      customCount: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeCustom = this.onChangeCustom.bind(this);
  }

  onChange(value) {
    this.setState({
      selected: value,
      isHidden: value !== 'custom',
    });

    this.props.onChange(value === 'custom' ? this.state.customCount : value);
  }

  onChangeCustom(event) {
    this.setState(
      { customCount: event.target.value },
      () => this.props.onChange(this.state.customCount),
    );
  }

  render() {
    const { isHidden, selected } = this.state;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 4}>
        <Title>Количество</Title>
        <RowWrapper>
          <Row>
            <Col xs={12} lg={2}>
              <CheckPoint selected={selected} name="count" text="1-10 шт." value="1-10" onChange={this.onChange} />
              <CheckPoint selected={selected} name="count" text="11-50 шт." value="11-50" onChange={this.onChange} />
              <CheckPoint selected={selected} name="count" text="51-100 шт." value="51-100" onChange={this.onChange} />
            </Col>
            <Col xs={12} lg={2}>
              <CheckPoint selected={selected} name="count" text="101-300 шт." value="101-300" onChange={this.onChange} />
              <CheckPoint selected={selected} name="count" text="301-500 шт." value="301-500" onChange={this.onChange} />
              <CheckPoint selected={selected} name="count" text="От 500" value="500+" onChange={this.onChange} />
            </Col>
            <Col xs={12} lg={2}>
              <CheckPoint selected={selected} name="count" text="Другое" value="custom" onChange={this.onChange} />
              <CustomCountField isHidden={isHidden}>
                <CustomCount>Введите количество</CustomCount>
                <Input type="number" name="" placeholder="0" onChange={this.onChangeCustom} />
              </CustomCountField>
            </Col>
          </Row>
        </RowWrapper>
        <Image src={qty} />
        <StepButtons disabled={!selected} toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
