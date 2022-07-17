import styled from "styled-components";
import {device} from "../../device";
import closeIcon from "./close.png";

export const BooksUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow-x: scroll;

  overflow-y: hidden;
`;

export const BookLi = styled.li`
  margin-right: 20px;
  padding: 20px;
`;

export const CardBook = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  cursor: pointer;

  @media ${device.mobileL} {
    height: 550px;
  }
`;

export const ImageBook = styled.img`
  width: 100%;
  height: 90%;
  box-shadow: 0px 0px 12px -2px #AF7A6D;
  object-fit: fill;
  ${CardBook}:hover & {
    box-shadow: 0px 0px 25px 1px #AF7A6D;
  };
`;

export const InfoBook = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  margin-top: 10px;
`;

export const ChangeButton = styled.button`
  width: 40px;
  background-color: transparent;
  border: 1px solid var(--header-background);
  border-radius: 50%;
  padding: 10px;
`;

export const DeleteBook = styled.button`
  border: none;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  right: 15px;
  margin-left: auto;
  margin-bottom: 10px;
  background: transparent;
  background-image: url(${closeIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: .1s;
  opacity: 0.6;
  &:hover{
    opacity: 0.9;
  }
`;