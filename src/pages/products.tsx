import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { DarkMode } from "../context/DarkMode";
import TableCart from "../components/layouts/TableCart";
import NavBar from "../components/layouts/NavBar";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

type CardItem = {
  id: number;
  qty: number;
};

// const products: Products[] = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: 1_000_000,
//     image: "/images/brown-leather-shoes.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//         corrupti harum dicta vero beatae minus ad dignissimos eos dolorem
//         magnam, ab voluptas. Dignissimos sunt facilis earum, veniam sapiente
//         illum suscipit!`,
//   },
//   {
//     id: 2,
//     name: "Men Shoes",
//     price: 500_000,
//     image: "/images/brown-leather-shoes.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//         corrupti harum`,
//   },
//   {
//     id: 3,
//     name: "Women Shoes",
//     price: 2_500_000,
//     image: "/images/brown-leather-shoes.jpg",
//     description: `Ini sepatu untuk wanita`,
//   },
// ];

const ProductsPage = () => {
  const [card, setCard] = useState<CardItem[]>([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Products[]>([]);
  const { isDarkMode} = useContext(DarkMode);
  useEffect(() => {
    const savedCard = localStorage.getItem("card");
    if (savedCard) {
      setCard(JSON.parse(savedCard) as CardItem[]);
    }
  }, []);

  useEffect(() => {
    getProducts({
      callback: (data: Products[]) => {
        setProducts(data);
      },
    });
  }, []);

  const handleAddToCard = (id: number) => {
    setCard((card) => {
      // Jika produk dengan id sudah ada, tambahkan qty
      if (card.find((item) => item.id === id)) {
        return card.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Jika produk belum ada, tambahkan ke daftar, sambil menghapus id -1
      return [...card, { id, qty: 1 }];
    });
  };

  return (
    <div className={`font-poppin ${isDarkMode && "bg-slate-900"}`}>
      <NavBar />
      <div className="flex my-8">
        <div className="flex gap-2 ml-2 flex-wrap w-2/4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header id={product.id} image={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  price={product.price}
                  handleAddToCard={handleAddToCard}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/4 flex flex-col px-4">
          <h1 className="text-2xl text-blue-600 font-bold">Card</h1>
          <TableCart products={products} card={card} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
