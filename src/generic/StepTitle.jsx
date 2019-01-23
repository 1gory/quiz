import styled from 'styled-components';

export default styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  padding: 20px 0;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;    
    padding: 0 20px;
  }
`;
