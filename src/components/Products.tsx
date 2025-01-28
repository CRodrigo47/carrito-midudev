import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { Product } from "../types/products";
import { useCart } from "../hooks/useCart";

type Props = {
  products: Product[]; //Es necesario tipar las props. Sino, la prop es tipo any.
};

export function Products({ products }: Props) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          //El Slice corta los 10 primeros resultados.
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                style={{backgroundColor: isProductInCart ? "red" : "#09f"}}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
