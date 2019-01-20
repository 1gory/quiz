import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import Block from '../generic/Block';
import printingList from './printing';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 620px;
  
  @media(max-width: 768px) {
    height: auto;  
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      printing: printingList.white,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      selected: value,
      printing: printingList[value],
    });
    this.props.onChange(value);
  }

  render() {
    const { selected, printing } = this.state;
    const {
      name, description, points, mainImg, photos,
    } = printing;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 3}>
        <Title>Выберите тип печати</Title>
        <Block
          name={name}
          description={description}
          points={points}
          mainImg={mainImg}
          photos={photos}
          onChange={this.onChange}
          selected={this.state.selected}
          type="materials"
          array={printingList}
        />
        <StepButtons disabled={!selected} toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
