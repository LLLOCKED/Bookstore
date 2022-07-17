import {Content} from "../styles";
import ButtonBuy from "../components/Buttons/ButtonBuy/ButtonBuy";
import CartBooks from "../components/CartBooks/CartBooks";
import {useDispatch, useSelector} from "react-redux";

import imageCartEmpty from "../assets/cart.jpg"

import {clearCart} from "../store/slices/cartSlice";

const Cart = () => {

    const books = useSelector((state) => state.cart.items)
    const totalPrice = useSelector((state) => state.cart.allPrice)

    const dispatch = useDispatch()

    return (
        <Content>
            {books.length !== 0 ?
                <>
                    <div style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span style={{fontSize: "30px"}}>Корзина</span>
                            <ButtonBuy click={() => dispatch(clearCart())}>Очистити корзину</ButtonBuy>
                        </div>
                        <CartBooks books={books}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "40px", width: "100%"}}>
                        <span>Загальна ціна: {totalPrice}</span>
                        <ButtonBuy>Купити</ButtonBuy>
                    </div>
                </>
                : <div style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "35px"
                }}>
                    <img src={imageCartEmpty} alt="корзина" />
                    <h3>Корзина пуста</h3>
                    <span>Додайте книгу щоб придбати</span>
                </div>}
        </Content>);
};


export default Cart;