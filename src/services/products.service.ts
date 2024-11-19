import axios from "axios";

interface Products {
    id: number;
    title: string;
    price: number
    description: string;
    image: string;
}

interface GetProductsProps {
  callback: (products: Products[]) => void
}

const getProducts = ({callback}: GetProductsProps) => {
  axios
    .get<Products[]>("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      alert(err);
    });
};

export default getProducts;
