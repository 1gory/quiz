import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import PickerInput from '../../generic/PickerInput';
import calendar from './calendar.svg';
import getDateAfterDays from '../../function/getDateAfterDays';
import 'react-datepicker/dist/react-datepicker.css';

const Wrapper = styled.div`
  position: relative;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: getDateAfterDays(10),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState(
      { selectedValue: date.toLocaleDateString() },
      () => this.props.onChange(this.state.selectedValue),
    );
  }

  render() {
    const { selectedValue } = this.state;
    return (
      <Wrapper>
        <PickerInput
          selectedValue={selectedValue}
          icon={calendar}
          input={DatePicker}
          dateFormat="dd/MM/yyyy"
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}
