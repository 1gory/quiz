import styled from 'styled-components';

export default styled.h1`
  margin-top: 90px;
  margin-bottom: 90px;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  
  @media (max-width: 768px) {
    line-height: 1.56;
    padding: 0 20px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: left;
  }
`;
