import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../generic/Button';
import Title from '../generic/Title';
// import reasons from './reasons.png';
import Offer from '../generic/Offer';
import Preloader from '../generic/Preloader';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  
  height: calc(100vh - 160px);
  
  @media (max-width: 768px) {      
    height :auto;
  }
`;

const OfferWrapper = styled.div`
  padding-bottom: 100px;
  
  @media (max-width: 768px) {      
    padding-bottom: 270px;
  }
`;

// const Image = styled.img`
//   position: absolute;
//   width: 380px;
//   bottom: 0;
//   right: 0px;
//   z-index: -1;
//
//   @media (max-width: 768px) {
//     width: 240px;
//     bottom: 0;
//     right: 0px;
//   }
// `;

const Video = styled.div`
  position: absolute;
  right: 0px;
  top: 195px;
  width: 100%;
  max-width: 475px;
  @media (max-width: 1010px) {
    display: none;  
  }
  @media (max-width: 768px) {
    display: block;
    opacity: ${({ scrolled }) => scrolled};
    top: auto;
    bottom: -5px;  
    left: 0;
    right: 0;
    margin: 0 auto;   
  }
`;

const StartButton = styled(Button)`
  width: 300px;
  color: #fff;
  background-color: #ff181f;
`;

const ButtonName = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

const SubName = styled.div`
  padding-top: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`;

const Br = styled.br`
  @media(max-width: 768px){
    display: none;
  }
`;


export default class extends Component {
  state = {
    scrolled: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scrolled,
    });
  };

  render() {
    const { currentStep, toNextStep } = this.props;
    const { scrolled } = this.state;

    return (
      <Wrapper hidden={currentStep !== 0}>
        <Preloader />
        <Content>
          <Title>
            Пройдите тест за 2 минуты и получите самое выгодное
            <br />
            предложение по печати на чехлах
          </Title>
          <OfferWrapper>
            <Offer title={(
              <span>
                Ответьте на 8 простых вопросов и
                <Br />
                получите совершенно бесплатно:
              </span>
            )}
            />
          </OfferWrapper>

          <Video scrolled={scrolled}>
            <iframe
              src="https://open.ivideon.com/embed/v2/?server=100-obDZ9KpsEmEGJkXDV8RcOG&amp;camera=0&amp;width=&amp;height=&amp;lang=ru"
              width="100%"
              height="270"
              frameBorder="0"
              title="Наше производство"
              allowFullScreen
            />
          </Video>

          {/* <Image src={reasons} /> */}
          <StartButton onClick={toNextStep}>
            <ButtonName>пройти тест</ButtonName>
            <SubName>и получить бонусы</SubName>
          </StartButton>
        </Content>
      </Wrapper>
    );
  }
}
