import React, { Component } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import PickerInput from '../../generic/PickerInput';
import palette from './palette.svg';


const Picker = styled(SketchPicker)`
  margin-top: 10px;
  ${props => (props.hidden && 'display: none;')} 
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      selectedColor: '#000000',
    };

    this.onChangeColor = this.onChangeColor.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({ hidden: false });
  }

  onBlur() {
    this.setState({ hidden: true });
  }

  onChangeColor(color) {
    this.setState({ selectedColor: color.hex });
    this.props.onChange(color.hex);
  }

  render() {
    const { hidden, selectedColor } = this.state;
    return (
      <div>
        <PickerInput
          selectedValue={selectedColor}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          icon={palette}
        />
        <Picker color={selectedColor} hidden={hidden} onChangeComplete={this.onChangeColor} />
      </div>
    );
  }
}
