import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 170px;
  padding: 10px 20px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 20px;
  cursor: pointer;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  render() {
    const {
      selectedValue, onChange, onFocus, onBlur, icon, input,
    } = this.props;
    return (
      <InputWrapper>
        <Input
          as={input}
          value={selectedValue}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          ref={this.textInput}
        />
        <Icon src={icon} onClick={this.onClick} />
      </InputWrapper>
    );
  }
}
