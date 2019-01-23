import React from 'react';
import styled from 'styled-components';
import Callback from './Popup/Callback';
import Success from './Popup/Success';

const Wrapper = styled.div`
  ${props => !props.isPopupOpen && 'display: none'}
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 2;
  
  opacity: 0.5;
  background-color: rgba(0,0,0,.99);
`;

const Popup = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
 
  border-radius: 3px;
  background: #fff;
  z-index: 3;
  padding: 35px;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  font-size: 28px;
  cursor: pointer;
  right: 0;
`;

export default ({ isPopupOpen, closePopup, popupType }) => (
  <Wrapper isPopupOpen={isPopupOpen}>
    <Popup>
      <ContentWrapper>
        <CloseButton onClick={closePopup}>×</CloseButton>
        {popupType}
      </ContentWrapper>
    </Popup>
    <Background />
  </Wrapper>
);
