import styled from "styled-components";

export const Button = styled.button`
  user-select: none;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: ${({ backgroundColor }) => backgroundColor || "green"};
  padding: 10px 16px;
  color: white;

  margin: 5px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`;
