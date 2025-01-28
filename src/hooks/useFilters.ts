import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { Product } from "../types/products";

export function useFilters() {
    //Custom Hook extraido para los filtros
    const context = useContext(FiltersContext); //En Typescript, es necesario guardar el valor del contexto y luego comprobar si existe
  
    if(!context){
      throw new Error("useFilters debe ser usado dentro de un Filters Provider")
    }
    
    const {filters, setFilters} = context
  
    const filterProducts = (products: Product[]) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
  
    return { filters, filterProducts, setFilters };
  }