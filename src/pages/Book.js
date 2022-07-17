import {Content} from "../styles";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ButtonBuy from "../components/Buttons/ButtonBuy/ButtonBuy";
import {addItem} from "../store/slices/cartSlice";
import {useDispatch} from "react-redux";


const Book = () => {

    const [book, setBook] = useState();
    const {id} = useParams();

    const dispatch = useDispatch();

    const getBookById = async () => {
        try {
            const {data} = await axios.get(`https://62c15c6f2af60be89ec576b0.mockapi.io/books/${id}`);
            setBook(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBookById();
    }, [])

    const addBookToCart = (data) => {
        dispatch(addItem(data))
        console.log(data)
    }

    if (!book) {
        return (<Content>
            Завантаження....
        </Content>)
    }

    return (
        <Content>
            <div style={{backgroundColor: "white", padding: "30px", borderRadius: "15px"}}>
                <div style={{display: "flex"}}>
                    <img src={book.imageL} alt={book.title} style={{width: "400px"}}/>
                    <div style={{display: "flex", flexDirection: "column", marginLeft: "40px"}}>
                        <h3>{book.title}</h3>
                        <span>{book.authors}</span>
                        <span>{book.publication}</span>
                        <span>{book.publisher}</span>
                        <div style={{width: "200px"}}>
                            <ButtonBuy click={() => addBookToCart({
                                id: book.id,
                                title: book.title,
                                authors: book.authors,
                                price: book.price,
                                imageL: book.imageL
                            })}>Додати в корзину</ButtonBuy>
                        </div>
                    </div>
                </div>
            </div>
        </Content>);
};


export default Book;