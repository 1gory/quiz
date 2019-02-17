import React, { Component } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import Title from '../generic/StepTitle';
import StepButtons from '../generic/StepButtons';
import uploadLogo from './upload.svg';

import i1 from './1.jpg';
import i2 from './2.jpg';
import i3 from './3.jpg';
import i4 from './4.jpg';
import i5 from './5.jpg';
import i6 from './6.jpg';
import i7 from './7.jpg';
import i8 from './8.jpg';
import i9 from './9.jpg';

const Wrapper = styled.section`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  height: calc(100vh - 205px);
  
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 100px;
  }
`;

const StyledChooseFilesButton = styled.button`
  border: none;
  width: 100px;
  height: 75px;
  cursor: pointer;
  background: ${props => (props.active ? '#ff181f' : '#f2f2f3')};
  color: ${props => (props.active && '#fff')};
  
  &:hover {
    background: ${props => (props.active ? '#ff5d62' : '#f7f6f5')};
  }
`;

const ChooseFilesButtonsWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding-bottom: 30px;
`;

const CatalogText = styled.a`
  color: #231f20;
  display: block;
  text-align: center;
  
  @media (max-width: 768px) {   
    padding: 0 20px;
  }
`;

const CatalogSubText = styled.div`
  text-align: center;
  font-weight: 500;
  padding-top: 10px;
`;

const Gallery = styled.div`
  display: flex;
  margin: 0 auto;
  width: inherit;
  padding-top: 15px;
  overflow: scroll;
  
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
      background: #fff;
  }
`;

const Img = styled.img`
  width: 130px;
  align-self: center;
`;

const UploadArea = styled.div`
  margin: 0 auto;
  padding: 0 100px 20px 100px;
  width: fit-content;
  box-shadow: 0 0 1px 1px #e3e3e3;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  
  ${({ isDragActive }) => isDragActive && `
    color: #fff;
    background: repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px);
  `}
`;

const UploadLogo = styled.img`
  width: 100px;
  padding: 20px 0;
`;

const UploadText = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
`;
const UploadSubText = styled.div`
  padding: 5px 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonText = {
  false: 'Нет',
  true: 'Да',
};

const ChooseFilesButton = ({ text, active, onClick }) => (
  <StyledChooseFilesButton onClick={() => (onClick(text))} active={active === text}>
    {ButtonText[text]}
  </StyledChooseFilesButton>
);

const onDrop = (acceptedFiles, rejectedFiles, onChange) => {
  console.log(acceptedFiles);
  acceptedFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      onChange({ data: fileAsBinaryString, name: file.name });
      // do whatever you want with the file content
    };
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');

    reader.readAsDataURL(file);
  });
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      havePrints: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({
      havePrints: value,
    });
  }

  onUpload() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { havePrints, loaded } = this.state;
    const {
      currentStep, toPrevStep, toNextStep, onChange,
    } = this.props;
    return (
      <Wrapper hidden={currentStep !== 7}>
        <Title>У вас уже есть макеты для печати?</Title>
        <ChooseFilesButtonsWrapper>
          {[true, false].map(text => (
            <ChooseFilesButton
              text={text}
              active={havePrints}
              onClick={this.onClick}
            />
          ))}
        </ChooseFilesButtonsWrapper>
        { havePrints === false && (
          <div>
            <CatalogText href="https://yadi.sk/d/lWHIG8mq3QEZhp" target="_blank">
              Можем предложить свой каталог принтов
            </CatalogText>
            <CatalogSubText>Более 9000 вариантов</CatalogSubText>
            <Gallery>
              <Img src={i1} />
              <Img src={i2} />
              <Img src={i3} />
              <Img src={i4} />
              <Img src={i5} />
              <Img src={i6} />
              <Img src={i7} />
              <Img src={i8} />
              <Img src={i9} />
            </Gallery>
          </div>
        )}
        { havePrints === true && (
          <Dropzone
            onDrop={
              (acceptedFiles, rejectedFiles) => {
                this.onUpload();
                onDrop(acceptedFiles, rejectedFiles, onChange);
              }
            }
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <UploadArea isDragActive={isDragActive}>
                  <UploadLogo src={uploadLogo} />
                  <UploadText>Выберите файл</UploadText>
                  <UploadSubText>{loaded ? 'Файл загружен' : 'Или бросьте его сюда'}</UploadSubText>
                </UploadArea>
              </div>
            )}
          </Dropzone>
        )}

        <StepButtons toPrevStep={toPrevStep} toNextStep={toNextStep} />
      </Wrapper>
    );
  }
}
