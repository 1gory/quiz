import React from 'react';
import styled from 'styled-components';
import Button from '../generic/Button';
import Title from '../generic/Title';
import reasons from './reasons.png';
import checklist from '../icons/checklist.svg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  height: 620px;
`;

const Description = styled.div`
  padding-top: 90px;
  padding-left: 90px;
`;

const DescriptionTitle = styled.h2`

`;

const StyledPoint = styled.div`
  display: flex;
  align-items: center;
`;

const ChecklistImg = styled.img`
  width: 22px;
  padding: 15px 15px 20px 0;
`;

const Image = styled.img`
  position: absolute;
  width: 400px;
  bottom: 0;
  right: -70px;
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

const Point = ({ text }) => (
  <StyledPoint>
    <ChecklistImg src={checklist} />
    {text}
  </StyledPoint>
);

export default ({ currentStep, toNextStep }) => (
  <Wrapper hidden={currentStep !== 0}>
    <Content>
      <Title>
        Пройдите тест за 2 минуты и получите самое выгодное
        <br />
        предложение по печати на чехлах
      </Title>
      <Description>
        <DescriptionTitle>
          Ответьте на 8 простых вопросов
          <br />
          и получите совершенно бесплатно:
        </DescriptionTitle>
        <Point text="Сертификат на скидку до 30%" />
        <Point text="Каталог всей нашей продукции" />
        <Point text="Стоимость тиража под ключ" />
      </Description>
      <Image src={reasons} />
      <StartButton onClick={toNextStep}>
        <ButtonName>пройти тест</ButtonName>
        <SubName>и получить бонусы</SubName>
      </StartButton>
    </Content>
  </Wrapper>
);
