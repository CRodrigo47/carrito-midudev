import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { Product } from "../types/products";
import { useCart } from "../hooks/useCart";

type Props = {
  products: Product[]; //Es necesario tipar las props. Sino, la prop es tipo any.
};

export function Products({ products }: Props) {
  const {addToCart} = useCart()
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => ( //El Slice corta los 10 primeros resultados.
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
