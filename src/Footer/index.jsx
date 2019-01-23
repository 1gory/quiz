import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: #444041;
  
  @media (max-width: 768px) {
    position: inherit;
    padding-bottom: 150px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const PrivacyPolicyLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
  
  @media (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 20px;
    order: 2;
    font-size: 14px;
  }
`;

const Copyright = styled.span`
  color: rgba(255, 255, 255, 0.25);
  padding-right: 20px;
   
  @media (max-width: 768px) {
    padding-right: 20px;
    padding-bottom: 20px;
    order: 3;
    font-size: 14px;
  }
`;

const MailLink = styled.a`
  color: #fff;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const PhoneLink = styled.a`
  color: #fff;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Content>
      <PrivacyPolicyLink href="./politika.html">Политика конфиденциальности</PrivacyPolicyLink>
      <ContactWrapper>
        <PhoneLink href="tel:+7(499)409-08-18">8 499 409 08 18</PhoneLink>
        <MailLink href="mailto:info@souvenirstudio.ru">info@souvenirstudio.ru</MailLink>
      </ContactWrapper>
      <Copyright>© SouvenirStudio 2018, г. Москва</Copyright>
    </Content>
  </Wrapper>
);
