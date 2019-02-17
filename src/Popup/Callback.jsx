import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import validatePhone from '../function/validatePhone';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background-color: ${props => (props.valid ? '#f9f9f8' : '#ffe4ea')};
  border: none;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

const Button = styled.button`
  background-color: #ff181f;
  cursor: pointer;
  padding: 20px 7px;
  border: none;
  color: #fff;
  border-radius: 5px;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneValid: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isPhoneValid = validatePhone(this.state.phone);

    this.setState({
      isPhoneValid,
    });

    if (isPhoneValid) {
      const form = new FormData();
      const { name, phone } = this.state;
      form.append('name', name);
      form.append('callback', true);
      form.append('phone', phone);
      fetch('api/send.php', {
        method: 'POST',
        body: form,
      }).then(async (response) => {
        // const responseData = await response;
        // this.setState({
        //   isPopupOpen: true,
        // });
      }).catch((e) => {
        console.log(e);
      });

      this.props.handleSendСallback();
    }
  }

  render() {
    return (
      <Wraper>
        <Title>Заказать звонок</Title>
        <Input valid name="name" placeholder="Имя" onChange={this.handleInput} />
        <Input
          as={InputMask}
          valid={this.state.isPhoneValid}
          name="phone"
          mask="+7 (999) 999-99-99"
          placeholder="Телефон"
          onChange={this.handleInput}
        />
        <input type="hidden" name="callback" value={1} />
        <Button onClick={this.handleSubmit} type="submit">Заказать</Button>
      </Wraper>
    );
  }
}
