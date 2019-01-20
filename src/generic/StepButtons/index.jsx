import React from 'react';
import styled from 'styled-components';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

const Button = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 3px;
  
  @media (max-width: 768px) {
    position: fixed;
    bottom: 50px;
  }
`;

const StepButtonsWrapper = styled.div`
  display: flex;
`;

const StepButton = styled.button`
  position: relative;
  background-color: ${props => (props.disabled ? '#ff6067' : '#ff181f')};
  cursor: pointer;
  padding: 30px 46px;
  border: none;
  color: #fff;

  &:hover {
    background-color: #ff6067;
  }
`;

const PrevButton = styled(StepButton)`
  border-radius: 3px 0 0 0;
  
  &::after {   
    content: url(${arrowLeft}); 
    width: 11px;
    position: absolute;
    left: 26px;
    top: 33px;
  }
`;

const NextButton = styled(StepButton)`
  border-radius: 0 3px 0 0;
  
  &::after {   
    content: url(${arrowRight}); 
    width: 11px;
    position: absolute;
    right: 26px;
    top: 33px;
  }
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default ({ toPrevStep, toNextStep, disabled }) => (
  <Button>
    <StepButtonsWrapper>
      <PrevButton onClick={() => { scrollToTop(); toPrevStep(); }}>Назад</PrevButton>
      <NextButton
        disabled={disabled}
        onClick={() => { scrollToTop(); toNextStep(); }}
      >
        Вперед
      </NextButton>
    </StepButtonsWrapper>
  </Button>
);
