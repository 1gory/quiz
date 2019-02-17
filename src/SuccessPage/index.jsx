import React from 'react';
import styled from 'styled-components';
import Preloader from '../generic/Preloader';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  max-width: 768px;
  margin: 0 auto;
  padding: 30px 20px;
`;

const Header = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  
`;

export default ({ currentStep }) => (
  <Wrapper hidden={currentStep !== 10}>
    {currentStep === 10 && <Preloader />}
    <Header>Спасибо! Ваша заявка принята.</Header>
    <Text>
      В настоящий момент наши лучшие менеджеры дерутся между собой за право позвонить вам и
      рассказать про нашу продукцию!
      <br />
      Так же мы отправили Вам на почту каталог с нашей продукцией. Будем рады заказам!
      <br />
      Если письмо не пришло , проверьте папку спам.
    </Text>
  </Wrapper>
);
