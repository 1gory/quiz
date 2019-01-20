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
      // isHidden: true,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { handleClick, selected } = this.props;
    return (
      <div>
        <Brand
          name="Другой"
          logoWidth={15}
          logo={plus}
          selected={selected}
          handleClick={handleClick}
        />

        <CustomBrandInputWrapper hidden={selected !== 'Другой'}>
          <CustomBrandInput
            placeholder="Название"
            onChange={event => (this.props.onChange(event.target.value))}
          />
        </CustomBrandInputWrapper>
      </div>
    );
  }
}
