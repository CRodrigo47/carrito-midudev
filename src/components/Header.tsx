import {Filters} from "./Filters"

type Props = {
    setFilters: Function
}

export function Header(){
    return(
        <header>
            <h1>React Shop</h1>
            <Filters />
        </header>
    )
}