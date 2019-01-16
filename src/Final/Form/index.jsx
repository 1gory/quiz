import React, { Component } from 'react';
import styled from 'styled-components';
import nameIcon from './name-icon.svg';
import phoneIcon from './phone-icon.svg';
import emailIcon from './email-icon.svg';

const Form = styled.form`
  margin-right: 150px;
  width: 300px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 0 15px 50px;
  background-color: #f9f9f8;
  border: none;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const Icon = styled.img`
  width: 20px;
  margin: auto;
  position: absolute;
  top: 0; 
  bottom: 0;
  left: 20px;
`;

const Button = styled.button`
  padding: 15px;
  width: 100%;
  background: #ff181f;
  border: none;
  color: #fff;
  font-weight: 500;
  border-radius: 3px;
`;

const Input = ({ placeholder, icon, name }) => (
  <InputWrapper>
    <Icon src={icon} />
    <StyledInput name={name} placeholder={placeholder} />
  </InputWrapper>
);

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Form>
        <Input icon={nameIcon} placeholder="Имя" />
        <Input icon={emailIcon} placeholder="Email" />
        <Input icon={phoneIcon} placeholder="Телефон" />
        <Button>Получить результаты</Button>
      </Form>
    );
  }
}
