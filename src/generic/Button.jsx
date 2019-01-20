import styled from 'styled-components';

export default styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  
  @media (max-width: 768px) {
    position: fixed;
    bottom: 50px;
  }
`;
