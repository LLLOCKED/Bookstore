import styled from "styled-components";

export const FormContainerFeedback = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInputFeedback = styled.input`
  border: none;
  margin-bottom: 10px;
  background-color: var(--button-background);
  color: var(--dark-color-text);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const FormTextareaFeedback = styled.textarea`
  border: none;
  resize: none;
  margin-bottom: 10px;
  background-color: var(--button-background);
  color: var(--dark-color-text);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  height: 200px;
`;

export const FormButtonFeedback = styled.input`
  border: none;
  background-color: var(--header-background);
  color: var(--color-text);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;