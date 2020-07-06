import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: solid;
  border-color: #41addd;
  border-radius: 3px;
  background-color: #41addd;
  width: 100%;

  &:hover {
    background-color: #2d799a;
    border-color: #2d799a;
  }

  &:active {
    background-color: #2d799a;
    outline: none;
    border-color: #2d799a;
  }
`;

export default Button;
