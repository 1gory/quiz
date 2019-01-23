import styled from 'styled-components';

export default styled.h1`
  padding: 60px 0;
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  text-shadow: 1px 1px 2px white, 1px 1px 2px white;
  
  @media (max-width: 768px) {
    line-height: 1.56;
    padding: 0 20px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: left;
  }
`;
