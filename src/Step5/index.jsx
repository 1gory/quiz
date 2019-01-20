import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import Colorpicker from './Colorpicker';
import Color from './Color';
import colors from './colors';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 620px;
  
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 100px;
  }
`;

const RowWrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0 8px;
    padding: 0 20px;
  }
`;

const Colors = styled.div``;

const CustomColorTitle = styled.span`
  font-weight: 500;
  display: inline-block;
  padding-bottom: 15px;
  
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColors: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCustomColor = this.handleChangeCustomColor.bind(this);
  }

  handleClick(color) {
    const { selectedColors } = this.state;
    const index = selectedColors.indexOf(color);
    if (index === -1) {
      selectedColors.push(color);
    } else {
      selectedColors.splice(index, 1);
    }

    this.setState({
      selectedColors,
    }, () => this.props.onChange(this.state));
  }

  handleChangeCustomColor(color) {
    this.setState({
      customColor: color,
    }, () => this.props.onChange(this.state));
  }

  render() {
    const { customColor, selectedColors } = this.state;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 5}>
        <Title>Какие цвета чехлов вам необходимы?</Title>
        <RowWrapper>
          <Row>
            <Col lg={4}>
              <Colors>
                {colors.map(color => (
                  <Color color={color} onClick={this.handleClick} />
                ))}
              </Colors>
            </Col>
            <Col lgOffset={1} lg={3}>
              <CustomColorTitle>
                Вы можете добавить свой цвет
              </CustomColorTitle>
              <Colorpicker onChange={this.handleChangeCustomColor} />
            </Col>
          </Row>
        </RowWrapper>
        <StepButtons
          disabled={!(selectedColors.length !== 0 || customColor)}
          toPrevStep={toPrevStep}
          toNextStep={toNextStep}
        />
      </Wrapper>
    );
  }
}
