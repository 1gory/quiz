import React from 'react';
import styled from 'styled-components';
import StartButton from '../generic/Button';
import Title from '../generic/Title';
import Form from './Form';
import checklist from '../icons/checklist.svg';
import restart from './restart.svg';

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
  padding-left: 90px;
`;

const DescriptionTitle = styled.h2`
  margin-top: 0;
`;

const StyledPoint = styled.div`
  display: flex;
  align-items: center;
`;

const ChecklistImg = styled.img`
  width: 22px;
  padding: 15px 15px 20px 0;
`;

const FormWrapper = styled.div`
  padding-top: 90px;
  display: flex;
  justify-content: space-between;
`;

const RestartButton = styled(StartButton)`
  width: 200px;
  display: flex;
  align-items: flex-end; 
  text-transform: uppercase;
  font-size: 14px;
`;

const RestartIcon = styled.img`
  width: 22px;
  padding-right: 20px;
`;

const Point = ({ text }) => (
  <StyledPoint>
    <ChecklistImg src={checklist} />
    {text}
  </StyledPoint>
);

export default ({ currentStep }) => (
  <Wrapper hidden={currentStep !== 2}>
    <Content>
      <Title>
        Поздравляем! Вы прошли тест!
      </Title>
      <FormWrapper>
        <Description>
          <DescriptionTitle>
            Ответьте на 8 простых вопросов
            <br />
            и получите совершенно бесплатно:
          </DescriptionTitle>
          <Point text="Стоимость тиража под ключ" />
          <Point text="Сертификат на скидку до 30%" />
          <Point text="Каталог всей нашей продукции" />
        </Description>
        <Form />
      </FormWrapper>
      <RestartButton>
        <RestartIcon src={restart} />
        пройти заново
      </RestartButton>
    </Content>
  </Wrapper>
);
