import { createContext, ReactNode, useReducer } from "react";
import { CartProduct, Product } from "../types/products";
import { cartReducer, initialStateCartReducer } from "../components/reducers/cartReducer";

//Tipado del contexto
type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
};

//Creacion del contexto
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
//Tipado del Provider
type ProviderProps = {
  children: ReactNode;
};

//Creacion del Provider
export function CartProvider({ children }: ProviderProps) {
  const[state, dispatch] = useReducer(cartReducer, initialStateCartReducer)

  const addToCart = (product: Product) => dispatch({
    type: "ADD_TO_CART",
    payload: product
  })

  const removeFromCart = (product: Product) => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product
  })

  const clearCart = () => dispatch({
    type: "CLEAR_CART"
  })


  //Se devuelve el contexto con su provider y los valores indicados en el tipo del contexto
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
