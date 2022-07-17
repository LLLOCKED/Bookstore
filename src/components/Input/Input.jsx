import {SearchButtonClear, SearchInput, SearchWrapper} from "./styles";
import {useMemo, useRef, useState} from "react";
import debounce from 'lodash.debounce'

export default function Input ({change}) {

    const [valueInp, setValueInp] = useState('');
    const inputEl = useRef(null);

    const clearSearch = () => {
        setValueInp('');
        change('');
        inputEl.current.focus();
    }

    const debounceInput = useMemo(() => {return debounce((str) => change(str), 300)},[])

    const onChangeInput = (e) => {
        setValueInp(e.target.value);
        debounceInput(e.target.value);
    }

    return(
        <SearchWrapper>
            <SearchInput  ref={inputEl} value={valueInp} onChange={onChangeInput} placeholder="Пошук книг..." />
            {valueInp ? <SearchButtonClear onClick={clearSearch}></SearchButtonClear> : null}
        </SearchWrapper>
    )
}