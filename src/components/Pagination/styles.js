import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled(ReactPaginate).attrs({
    activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 10px;
    padding: 5px 15px;
    margin: 3px;
    color: var(--colorButton-background);
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: var(--button-background);
    border-color: transparent;
    color: var(--colorButton-background);
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;