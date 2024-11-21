import axios from "axios";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface RatingProps {
  rate: number;
  count: number;
}
interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: RatingProps;
}

interface CallbackGetDetailProduct {
  callback: (data: Product) => void

} 


interface GetProductsProps {
  callback: (products: Products[]) => void;
}

export const getProducts = ({ callback }: GetProductsProps) => {
  axios
    .get<Products[]>("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      alert(err);
    });
};



export const getDetailProduct = (id:number, {callback}: CallbackGetDetailProduct) => {
  axios
    .get<Product>("https://fakestoreapi.com/products" + "/" + id)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      alert(err);
    });
};
