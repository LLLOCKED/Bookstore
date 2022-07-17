import React from 'react'
import {ButtonStyle} from "./styles";

export default function ButtonBuy({children, click}) {
    return (
        <ButtonStyle onClick={click} >{children}</ButtonStyle>
    )
}
