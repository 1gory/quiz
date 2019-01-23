import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import materialsList from './materials';
import Block from '../generic/Block';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  height: calc(100vh - 205px);
  
  @media(max-width: 768px) {
    height: auto;  
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: materialsList.softtouch,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      selected: value,
      materials: materialsList[value],
    });
    this.props.onChange(value);
  }

  render() {
    const { selected, materials } = this.state;
    const {
      name, description, points, mainImg, photos,
    } = materials;
    const { currentStep, toPrevStep, toNextStep } = this.props;
    return (
      <Wrapper hidden={currentStep !== 2}>
        <Title>Выберите материал чехла</Title>
        <Block
          name={name}
          description={description}
          points={points}
          mainImg={mainImg}
          photos={photos}
          onChange={this.onChange}
          selected={this.state.selected}
          type="materials"
          array={materialsList}
        />
        <StepButtons disabled={!selected} toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
