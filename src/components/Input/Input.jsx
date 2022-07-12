import {SearchButtonClear, SearchInput, SearchWrapper} from "./styles";

export default function Input ({value, change}) {
    return(
        <SearchWrapper>
            <SearchInput value={value} onChange={(e) => change(e.target.value)} placeholder="Пошук книг..." />
            {value ? <SearchButtonClear onClick={() => change('')}></SearchButtonClear> : null}
        </SearchWrapper>
    )
}