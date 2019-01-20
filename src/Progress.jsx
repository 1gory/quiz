import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Progress = styled.div`
  display: ${({ hidden }) => (hidden && 'none')};
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  height: 6px;
  margin-top: 70px;
  background-color: #f7f6f5;
  border-radius: 3px;
  
  @media (max-width: 768px) {
    margin-top: 45px;
  }
`;

const ProgressComplete = styled.div`
  background-color: #ff181f;
  height: 6px;
  border-radius: 3px;
  width: ${({ percents }) => (percents)}%;
`;

export default ({ percents }) => (
  <Wrapper>
    <Progress hidden={percents === 0 || percents === 100}>
      <ProgressComplete percents={percents} />
    </Progress>
  </Wrapper>
);
