import { createContext, useState } from "react";

//1. Se crean los tipos que contienen el contexto
type ContextType = {
  filters: Object;
  setFilters: Function;
};

//2. Se crea un contexto y se le pasa el tipo (Tipo o undefined) y un valor (undefined)
//Este es el que tenemos que consumir (se usa en el useContext)
export const FiltersContext = createContext<ContextType | undefined>(undefined);

// 3. Se crea un Provider para proveer el contexto
//Este nos provee de acceso al contexto (envuelve al componente)
export function FiltersProvider({ children }: any) {
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
