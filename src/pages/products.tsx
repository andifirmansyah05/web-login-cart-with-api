import Button from "../components/elements/button/Button";
import CardProduct from "../components/fragments/CardProduct";

type products = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

const products: products[] = [
  {
    id: 1,
    name: "Shoes",
    price: "Rp. 1.000.000",
    image: "/images/brown-leather-shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        corrupti harum dicta vero beatae minus ad dignissimos eos dolorem
        magnam, ab voluptas. Dignissimos sunt facilis earum, veniam sapiente
        illum suscipit!`,
  },
  {
    id: 2,
    name: "Men Shoes",
    price: "Rp. 500.000",
    image: "/images/brown-leather-shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        corrupti harum`,
  },
  {
    id: 3,
    name: "Women Shoes",
    price: "Rp. 2.500.000",
    image: "/images/brown-leather-shoes.jpg",
    description: `Ini sepatu untuk wanita`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="h-14 bg-blue-600 shadow flex gap-x-4 justify-end items-center px-8">
        {email}
        <Button onClick={handleLogout} classname="bg-black px-6">
          Logout
        </Button>
      </div>

      <div className="flex justify-center mt-2">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
