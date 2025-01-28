import React, { createContext, ReactNode, useState } from "react";

//1. Se crean los tipos que contienen el contexto
type Filters = {
  category: string;
  minPrice: number;
};

type FiltersContextType = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>; //Este es el tipo de los set
};

//2. Se crea un contexto y se le pasa el tipo (Tipo o undefined) y un valor (undefined)
//Este es el que tenemos que consumir (se usa en el useContext)
export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

// 3. Se crea un Provider para proveer el contexto
//Este nos provee de acceso al contexto (envuelve al componente)
type ProviderProps = {
  children: ReactNode
}
export function FiltersProvider({ children }: ProviderProps) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
