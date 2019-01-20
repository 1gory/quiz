import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import CheckPoint from '../generic/Checkpoint';
import Datepicker from './Datepicker';
import getDateAfterDays from '../function/getDateAfterDays';
import box from './box.svg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 620px;
  
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 250px;
  }
`;

const RowWrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0 8px;
    padding: 0 20px;
  }
`;

const DatepickerWrapper = styled.div`
  ${({ hidden }) => (hidden && 'display: none;')}
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 500px;
  bottom: 110px;
  right: 50px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      customDate: getDateAfterDays(10),
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeCustomDate = this.onChangeCustomDate.bind(this);
  }

  onChange(value) {
    this.setState({
      selected: value,
      isHidden: value !== 'other',
    });

    this.props.onChange(value === 'other' ? this.state.customDate : value);
  }

  onChangeCustomDate(customDate) {
    this.setState({
      customDate,
    });
  }

  render() {
    const { currentStep, toPrevStep, toNextStep } = this.props;
    const { isHidden, selected } = this.state;

    return (
      <Wrapper hidden={currentStep !== 6}>
        <Title>Сроки</Title>
        <RowWrapper>
          <Row>
            <Col lg={2}>
              <CheckPoint
                name="deadline"
                text="1-3 дня"
                value="1-3"
                onChange={this.onChange}
                selected={selected}
              />
              <CheckPoint
                name="deadline"
                text="3-7 дней"
                value="3-7"
                onChange={this.onChange}
                selected={selected}
              />
              <CheckPoint
                name="deadline"
                text="Более 7 дней"
                value="7+"
                onChange={this.onChange}
                selected={selected}
              />
            </Col>
            <Col lg={2}>
              <CheckPoint
                name="deadline"
                text="Выбрать дату"
                value="other"
                onChange={this.onChange}
                selected={selected}
              />
              <DatepickerWrapper hidden={isHidden}>
                <Datepicker onChange={this.onChangeCustomDate} />
              </DatepickerWrapper>
            </Col>
          </Row>
        </RowWrapper>
        <Image src={box} />
        <StepButtons disabled={!selected} toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
