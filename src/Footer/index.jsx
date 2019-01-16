import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  // position: fixed;
  // left: 0px;
  // bottom: 0px;
  width: 100%;
  background-color: #444041;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactWrapper = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrivacyPolicyLink = styled.a`
  color: #fff;
`;

const Copyright = styled.span`
  color: rgba(255, 255, 255, 0.25);
`;

const MailLink = styled.a`
  color: #fff;
  display: inline-block;
  padding: 5px;
`;

const PhoneLink = styled.a`
  color: #fff;
  display: inline-block;
  padding: 5px;
`;

export default () => (
  <Wrapper>
    <Content>
      <PrivacyPolicyLink>Политика конфиденциальности</PrivacyPolicyLink>
      <ContactWrapper>
        <PhoneLink>8 499 409 08 18</PhoneLink>
        <MailLink>info@souvenirstudio.ru</MailLink>
      </ContactWrapper>
      <Copyright>© SouvenirStudio 2018, г. Москва</Copyright>
    </Content>
  </Wrapper>
);
