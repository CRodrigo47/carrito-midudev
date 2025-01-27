import {Filters} from "./Filters"

type Props = {
    setFilters: Function
}

export function Header({setFilters}: Props){
    return(
        <header>
            <h1>React Shop</h1>
            <Filters setFilters={setFilters}/>
        </header>
    )
}