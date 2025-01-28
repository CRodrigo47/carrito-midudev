//Es lo mismo que crear interfaces en Angular. Da exactamente igual

export type ProductsStatus = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartProduct = Product & { //La & indica que además de ser igual
  quantity: number //que el tipo indicado, se extiende y tiene añadidos.
}
