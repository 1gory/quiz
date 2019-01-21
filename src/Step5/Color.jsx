import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColor = styled.div`
  display: inline-block;
  padding: 15px;
  margin: 5px;
  background-color: ${props => (props.color)};
  border-radius: 50%;
  cursor: pointer;
  ${props => (props.color === '#ffffff' && 'box-shadow: 0 0 1px 1px #ccc;')}
  border: 2px solid transparent;
  ${props => (props.checked && 'border: 2px solid red;')}
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(color) {
    this.setState(({ checked }) => ({
      checked: !checked,
    }));

    this.props.onClick(color);
  }

  render() {
    const { checked } = this.state;
    return (
      <StyledColor
        {...this.props}
        checked={checked}
        onClick={() => (this.onClick(this.props.color))}
      />
    );
  }
}
