import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../Brand';
import plus from './plus.svg';

const CustomBrandInputWrapper = styled.div`
  ${({ hidden }) => (hidden && 'display: none;')}
  padding: 0 15px;
`;

const CustomBrandInput = styled.input`
  box-sizing: border-box;
  background-color: f7f6f5;
  border: none;
  padding: 10px 15px;
  width: 100%
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  }

  render() {
    const { handleClick, onChange } = this.props;
    const { isHidden } = this.state;
    return (
      <div>
        <Brand
          name="Другой"
          logoWidth={15}
          logo={plus}
          handleClick={() => { this.handleClick(); handleClick(); }}
        />

        <CustomBrandInputWrapper hidden={isHidden}>
          <CustomBrandInput
            placeholder="Название"
            onChange={event => (onChange(event.target.value))}
          />
        </CustomBrandInputWrapper>
      </div>
    );
  }
}
