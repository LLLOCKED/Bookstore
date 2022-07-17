import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  width: 200px;
  background-color: var(--header-background);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-style: normal;
  color: var(--color-text);
  font-size: 16px;
  &:hover {
    background-color: var(--button-background);
    color: var(--dark-color-text);
  }
`;