import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  display: ${({ hidden }) => (hidden && 'none')};
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  height: 6px;
  margin-top: 70px;
  background-color: #f7f6f5;
  border-radius: 3px;
`;

const ProgressComplete = styled.div`
  background-color: #ff181f;
  height: 6px;
  border-radius: 3px;
  width: ${({ percents }) => (percents)}%;
`;

export default ({ percents }) => (
  <Progress hidden={percents === 0}>
    <ProgressComplete percents={percents} />
  </Progress>
);
