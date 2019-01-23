import React, { Component } from 'react';
import styled from 'styled-components';
import Callback from './Popup/Callback';
import Success from './Popup/Success';
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
import Popup from './Popup';

const Wrapper = styled.div`
  color: #231f20;
  font-family: 'GothamPro', sans-serif;
  min-height: 100vh;
`;

const StepsCount = 9;

export default class extends Component {
  constructor(props) {
    super(props);

    this.toNextStep = this.toNextStep.bind(this);
    this.toPrevStep = this.toPrevStep.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSendСallback = this.handleSendСallback.bind(this);

    this.state = {
      percents: 0,
      currentStep: 0,
      isPopupOpen: false,
      popupType: <Callback handleSendСallback={this.handleSendСallback} />,
    };
  }

  onClick() {
    this.setState({
      isPopupOpen: true,
      popupType: <Callback handleSendСallback={this.handleSendСallback} />,
    });
  }

  onChange(step, value) {
    const state = {};
    state[step] = value;
    this.setState(state);
  }

  closePopup() {
    this.setState({
      isPopupOpen: false,
    });
  }

  handleSendСallback() {
    this.setState({
      popupType: <Success />,
    });
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
    const {
      brand, material, printing, count, color, date, file, packaging,
    } = this.state;

    const form = new FormData();

    if (file) {
      form.append('file', file.data);
      form.append('file_name', file.name);
    }

    form.append('brand', brand);
    form.append('material', material);
    form.append('printing', printing);
    form.append('count', count);
    form.append('color', color);
    form.append('date', date);
    form.append('packaging', packaging);

    fetch('/send.php', {
      method: 'POST',
      body: form,
    }).then(async (response) => {
      // const responseData = await response;
      this.setState({
        isPopupOpen: true,
        popupType: <Success />,
      });
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    const {
      percents, currentStep, isPopupOpen, popupType,
    } = this.state;
    return (
      <Wrapper>
        <Header onClick={this.onClick} />
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
          onChange={value => (this.onChange('file', value))}
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
        <Popup isPopupOpen={isPopupOpen} closePopup={this.closePopup} popupType={popupType} />
        <Footer />
      </Wrapper>
    );
  }
}
