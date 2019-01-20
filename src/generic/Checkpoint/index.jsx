import React, { Component } from 'react';
import styled from 'styled-components';
import radioSelected from './radio-selected.svg';
import radio from './radio.svg';

const StyledCheckPoint = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
`;

const CheckPointName = styled.div`
  padding-top: 3px;
`;

const SubText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #9aa2b5;
`;

const Checkmark = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 25px;
  background-image: url(${radio});
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  
  &:checked ~ ${Checkmark} {
    background-image: url(${radioSelected});
  }
`;

export default ({
  text, submame, name, value, onChange, selected,
}) => (
  <StyledCheckPoint>
    <Input checked={value === selected} onChange={() => (onChange(value))} type="radio" name={name} value={value} />
    <Checkmark />
    <CheckPointName>
      <div>{text}</div>
      <SubText>{submame}</SubText>
    </CheckPointName>
  </StyledCheckPoint>
);
