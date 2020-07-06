import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: solid;
  border-color: #41addd;
  outline: none;
  border-radius: 3px;
  background-color: #41addd;

  &:hover {
    background-color: #2d799a;
    outline: none;
    border-color: #2d799a;
  }

  &:active {
    background-color: #2d799a;
    outline: none;
    border-color: #2d799a;
  }
`;

export default Button;
