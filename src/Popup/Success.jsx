import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  line-height: 1.5em;
  text-align: center;
`;

export default () => (
  <Wraper>
    <Title>Спасибо!</Title>
    <Text>
      Мы свяжемся с вами
      <br />
      в ближайшее время
    </Text>
  </Wraper>
);
