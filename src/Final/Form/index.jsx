import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import nameIcon from './name-icon.svg';
import phoneIcon from './phone-icon.svg';
import emailIcon from './email-icon.svg';
import validatePhone from '../../function/validatePhone';

const Form = styled.form`
  box-sizing: border-box;
  width: 300px;
  margin-right: 150px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    padding: 10px 20px;
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0 15px 50px;
  background-color: ${props => (props.valid ? '#f9f9f8' : '#ffe4ea')};
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
  background: ${props => (props.disabled ? '#ff6067' : '#ff181f')};
  border: none;
  color: #fff;
  font-weight: 500;
  border-radius: 3px;  
  cursor: pointer;
`;

const Input = ({
  placeholder, icon, name, as, mask, valid, onChange
}) => (
  <InputWrapper>
    <Icon src={icon} />
    <StyledInput
      valid={valid}
      as={as}
      mask={mask}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </InputWrapper>
);

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      name: '',
      isPhoneValid: true,
      isButtonDisabled: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const isPhoneValid = validatePhone(this.state.phone);
    this.setState({
      isPhoneValid,
    });

    if (isPhoneValid) {
      this.setState({
        isButtonDisabled: true,
      });
      this.props.handleSubmit(this.state);
    }
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { isButtonDisabled, isPhoneValid } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input valid name="name" icon={nameIcon} placeholder="Имя" onChange={this.handleInput} />
        <Input valid name="email" icon={emailIcon} placeholder="Email" onChange={this.handleInput} />
        <Input
          as={InputMask}
          name="phone"
          icon={phoneIcon}
          placeholder="Телефон"
          onChange={this.handleInput}
          mask="+7 (999) 999-99-99"
          valid={isPhoneValid}
        />
        <Button disabled={isButtonDisabled}>Получить результаты</Button>
      </Form>
    );
  }
}
