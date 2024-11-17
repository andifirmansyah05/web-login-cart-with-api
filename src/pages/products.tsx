import CardProduct from "../components/fragments/CardProduct";

type products = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: products[] = [
  {
    id: 1,
    name: "Shoes",
    price: "Rp. 1.000.000",
    image: "/images/men-shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        corrupti harum dicta vero beatae minus ad dignissimos eos dolorem
        magnam, ab voluptas. Dignissimos sunt facilis earum, veniam sapiente
        illum suscipit!`,
  },
  {
    id: 2,
    name: "Men Shoes",
    price: "Rp. 500.000",
    image: "/images/men-shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        corrupti harum`,
  },
  {
    id: 3,
    name: "Women Shoes",
    price: "Rp. 2.500.000",
    image: "/images/men-shoes.jpg",
    description: `Ini sepatu untuk wanita`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center mt-2">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
