import {PaginationButton, PaginationWrapper} from "./styles";

import {changeCurrentPage} from "../../store/slices/filterSlice";
import {useDispatch} from 'react-redux'

export default function Pagination({currentPage}) {

    const dispatch = useDispatch()

    return (
        <PaginationWrapper>
            <PaginationButton
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => dispatch(changeCurrentPage(event.selected + 1))}
                pageRangeDisplayed={5}
                pageCount={4}
                previousLabel="<"
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </PaginationWrapper>
    )
}