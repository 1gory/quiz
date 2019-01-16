import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Progress from './Progress';
import Footer from './Footer';
import Intro from './Intro';
import Final from './Final';
import Step1 from './Step1';

const Wrapper = styled.div`
  color: #231f20;
  font-family: 'GothamPro', sans-serif;
`;

const StepsCount = 8;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percents: 12.5,
      currentStep: 0,
    };

    this.toNextStep = this.toNextStep.bind(this);
    this.toPrevStep = this.toPrevStep.bind(this);
  }

  toNextStep() {
    this.setState(prevState => ({
      currentStep: prevState.currentStep + 1,
    }));
  }

  toPrevStep() {
    this.setState(prevState => ({
      currentStep: prevState.currentStep - 1,
    }));
  }

  render() {
    const { percents, currentStep } = this.state;
    return (
      <Wrapper>
        <Header />
        <Progress percents={percents} />
        <Intro currentStep={currentStep} toNextStep={this.toNextStep} />
        <Step1 currentStep={currentStep} toNextStep={this.toNextStep} toPrevStep={this.toPrevStep} />
        <Final currentStep={currentStep} />
        <Footer />
      </Wrapper>
    );
  }
}
