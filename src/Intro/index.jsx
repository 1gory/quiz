import React from 'react';
import styled from 'styled-components';
import Button from '../generic/Button';
import Title from '../generic/Title';
import reasons from './reasons.png';
import Offer from '../generic/Offer';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  height: 620px;
`;

const Image = styled.img`
  position: absolute;
  width: 400px;
  bottom: 0;
  right: -70px;
  z-index: -1;
  
  @media (max-width: 768px) {      
    width: 240px;
    bottom: 0;
    right: 0px;
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

export default ({ currentStep, toNextStep }) => (
  <Wrapper hidden={currentStep !== 0}>
    <Content>
      <Title>
        Пройдите тест за 2 минуты и получите самое выгодное
        <br />
        предложение по печати на чехлах
      </Title>
      <Offer title={(
        <span>
          Ответьте на 8 простых вопросов и
          <br />
          получите совершенно бесплатно:
        </span>
        )}
      />
      <Image src={reasons} />
      <StartButton onClick={toNextStep}>
        <ButtonName>пройти тест</ButtonName>
        <SubName>и получить бонусы</SubName>
      </StartButton>
    </Content>
  </Wrapper>
);
