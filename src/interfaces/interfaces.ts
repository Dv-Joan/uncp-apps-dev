export interface ProductsAction {
  type: string;
  payload?: any;
}
export interface ProductsState {
  products: Product[];
}
export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  quantity: number;
  imageSrc: string;
}
export interface ProductContextProps {
  products: Product[];
  addProduct: (product: any) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (id: number, product: any) => void;
}
