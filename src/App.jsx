import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Progress from './Progress';
import Footer from './Footer';
import Intro from './Intro';
import Final from './Final';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';

const Wrapper = styled.div`
  color: #231f20;
  font-family: 'GothamPro', sans-serif;
`;

const StepsCount = 9;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percents: 0,
      currentStep: 0,
    };

    this.toNextStep = this.toNextStep.bind(this);
    this.toPrevStep = this.toPrevStep.bind(this);
    this.onChange = this.onChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(step, value) {
    const state = {};
    state[step] = value;
    this.setState(state);
  }

  toNextStep() {
    this.setState(prevState => ({
      currentStep: prevState.currentStep + 1,
      percents: 100 * (prevState.currentStep + 1) / StepsCount,
    }));
  }

  toPrevStep() {
    this.setState(prevState => ({
      currentStep: prevState.currentStep - 1,
      percents: 100 * (prevState.currentStep - 1) / StepsCount,
    }));
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    const {
      percents, currentStep,
    } = this.state;
    return (
      <Wrapper>
        <Header />
        <Progress percents={percents} />
        <Intro currentStep={currentStep} toNextStep={this.toNextStep} />

        <Step1
          currentStep={currentStep}
          onChange={value => (this.onChange('brand', value))}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step2
          onChange={value => (this.onChange('material', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step3
          onChange={value => (this.onChange('printing', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step4
          onChange={value => (this.onChange('count', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step5
          onChange={value => (this.onChange('color', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step6
          onChange={value => (this.onChange('date', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step7
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Step8
          onChange={value => (this.onChange('packaging', value))}
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
        />

        <Final
          currentStep={currentStep}
          toNextStep={this.toNextStep}
          toPrevStep={this.toPrevStep}
          handleSubmit={this.handleSubmit}
        />

        <Footer />
      </Wrapper>
    );
  }
}
