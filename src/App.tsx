import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/product.json";
import { Product } from "./types/products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function useFilters() { //Custom Hook extraido para los filtros
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer/>
    </>
  );
}

export default App;
