import { useId, useState } from "react";
import "./Filters.css";

type Props = {
    setFilters: Function
}

export function Filters({setFilters}: Props) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId() //El useId crea un Id unica, ideal para los inputs.
  const categoryFilterId = useId() //NO USAR PARA LAS KEY. Las key requieren de id del elemento

  const handleChangeMinPrice = (event: any) => {
    setMinPrice(event.target.value);
    setFilters((prevState : any) => ({
        ...prevState,
        minPrice: event.target.value
    }))
  };

  const handleChangeCategory = (event: any) => {
    setFilters((prevState: any) => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" id={minPriceFilterId} min="0" max="1000" onChange={handleChangeMinPrice}/>
        <output>${minPrice}</output>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select name="categories" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Moviles</option>
        </select>
      </div>
    </section>
  );
}
