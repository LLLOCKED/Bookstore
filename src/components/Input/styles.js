import styled from "styled-components";
import searchIcon from "./search.png"
import closeIcon from "./close.png"

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 18px;
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;

  background-image: url(${searchIcon});
  background-size: 20px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
  border-radius: 15px;
  border: 2px solid var(--dark-color-text);
  transition: border-radius 0.5s;
  &:focus{
    border: none;
    border-bottom: 2px solid var(--dark-color-text);
    border-radius: 0;
    transition: border-radius 0.5s;
  }
`;

export const SearchButtonClear = styled.button`
  position: absolute;
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
  margin: auto;
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