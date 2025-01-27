import { createContext } from "react";

type ContextType = {
    category: string,
    minPrice: number
}

//1. Se crea un contexto
export const FiltersContext = createContext<ContextType | undefined>(undefined)

// 2. Se crea un Provider para proveer el contexto
export function FiltersProvider({children}: any){
    return(
        <FiltersContext.Provider value={{
            category: "all",
            minPrice: 0
        }}>
        {children}
        </FiltersContext.Provider>
    )
}