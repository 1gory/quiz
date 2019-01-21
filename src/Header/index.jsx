import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Wrapper = styled.header`
  background: #f7f6f5;
`;

const Content = styled.div`
  height: 110px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    height: 80px;
    justify-content: flex-end;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 16px;
  width: 120px;
  padding: 5px;
  border-radius: 70px;
  background: #fff;
  
  @media (max-width: 768px) {
    width: 90px;
    left: 12px;
    top: 8px;
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 120px;
  
  @media (max-width: 768px) {
    width: 90px;
  }
`;

const Description = styled.span`
  display: flex;
  flex-direction: column; 
  color: #231f20;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopPart = styled.span`
  white-space: nowrap;
`;
const BottomPart = styled.span`
  white-space: nowrap;
`;

const CallbackLink = styled.a`
  display: inline-block;
  padding-top: 5px;
  white-space: nowrap;
  border-bottom: 1px dashed gray;
  padding-bottom: 2px;
  font-weight: bold;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PhoneLink = styled.a`
  white-space: nowrap;
  font-size: 22px;
  color: inherit;
  text-decoration: none;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default () => (
  <Wrapper>
    <Content>
      <Description>
        <TopPart>Лучшие цены на рынке по принтам на чехлах!</TopPart>
        <BottomPart>Круглосуточная подержка в Москве.</BottomPart>
      </Description>
      <LogoWrapper>
        <a href="/"><Logo src={logo} /></a>
      </LogoWrapper>
      <Contacts>
        <PhoneLink href="tel:+7(499)409-08-18">8 499 409 08 18</PhoneLink>
        <CallbackLink>Обратный звонок</CallbackLink>
      </Contacts>
    </Content>
  </Wrapper>
);
