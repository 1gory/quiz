import React from 'react';
import styled from 'styled-components';
import StartButton from '../generic/Button';
import Br from '../generic/MobBr';
import Title from '../generic/Title';
import Offer from '../generic/Offer';
import Form from './Form';
import restart from './restart.svg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  height: 620px;
  
  @media (max-width: 768px) {
    height: auto;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding-top: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const RestartButton = styled(StartButton)`
  width: 200px;
  display: flex;
  align-items: flex-end; 
  text-transform: uppercase;
  font-size: 14px;
  background: none;
  
  @media (max-width: 768px) {   
    position: inherit;
    padding-top: 80px;
  }
`;

const RestartIcon = styled.img`
  width: 22px;
  padding-right: 20px;
`;

const onClick = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
};

export default ({ currentStep, handleSubmit }) => (
  <Wrapper hidden={currentStep !== 9}>
    <Content>
      <Title>
        Поздравляем!<Br /> Вы прошли тест!
      </Title>
      <FormWrapper>
        <Offer
          title={(
            <span>
              Введите ваши данные для получения результатов теста.
              Вы бесплатно получите:
            </span>
          )}
        />
        <Form handleSubmit={handleSubmit} />
      </FormWrapper>
      <RestartButton onClick={onClick}>
        <RestartIcon src={restart} />
        пройти заново
      </RestartButton>
    </Content>
  </Wrapper>
);
