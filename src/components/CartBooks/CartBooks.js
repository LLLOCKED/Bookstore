import React from 'react'
import {BookLi, BooksUl, CardBook, ChangeButton, DeleteBook, ImageBook, InfoBook} from "./styles";
import {AuthorBook, TitleBook} from "../Book/styles";
import {useDispatch} from "react-redux";
import {addItem, removeItem, removeOneItem} from "../../store/slices/cartSlice";

export default function CartBooks({books}) {
    const dispatch = useDispatch();

    return (
        <BooksUl>
            {books.map((book) =>
                <BookLi key={book.id}>
                    <DeleteBook onClick={() => dispatch(removeItem(book))} ></DeleteBook>
                    <CardBook>
                        <ImageBook src={book.imageL ? book.imageL : ''} alt={book.title}/>
                        <InfoBook>
                            <TitleBook>{book.title}</TitleBook>
                            <AuthorBook>{book.authors}</AuthorBook>
                        </InfoBook>
                        <span>{book.price} грн</span>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <ChangeButton onClick={() => dispatch(removeOneItem({id: book.id}))}>-</ChangeButton>
                            <span style={{margin: "0px 20px 0px 20px"}}>{book.count}</span>
                            <ChangeButton onClick={() => dispatch(addItem({id: book.id}))}>+</ChangeButton>
                        </div>
                    </CardBook>
                </BookLi>
            )}
        </BooksUl>
    )
}
