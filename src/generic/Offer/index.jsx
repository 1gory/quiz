import React from 'react';
import styled from 'styled-components';
import checklist from './checklist.svg';
import Br from '../MobBr';

const PointText = styled.span`
  text-shadow: 1px 1px 2px white, 1px 1px 2px white;
`;

const Description = styled.div`
  padding-left: 90px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const DescriptionTitle = styled.h2`
  margin-top: 0;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 0;
  }
`;

const StyledPoint = styled.div`
  display: flex;
  align-items: center;
`;

const ChecklistImg = styled.img`
  width: 22px;
  margin: 15px 15px 20px 0;
`;

const Point = ({ text }) => (
  <StyledPoint>
    <ChecklistImg src={checklist} />
    {text}
  </StyledPoint>
);

export default ({ title }) => (
  <Description>
    <DescriptionTitle>
      {title}
    </DescriptionTitle>
    <Point text={<PointText>Сигнальные образцы</PointText>} />
    <Point text={<PointText>Каталог всей нашей <Br />продукции</PointText>} />
    <Point text={<PointText>Стоимость тиража<Br /> под ключ</PointText>} />
  </Description>
);
