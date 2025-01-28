import { CartProduct, Product } from "../../types/products";

type State = CartProduct[];

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product }
  | { type: "CLEAR_CART" };

export const initialStateCartReducer: CartProduct[] = JSON.parse(
  window.localStorage.getItem("cart") || "[]"
) as CartProduct[];

export const updateLocalStorage = (state: State) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...action.payload, //Product
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = state.filter((item) => item.id !== action.payload.id);
      updateLocalStorage(newState);
      return newState;
    }

    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
