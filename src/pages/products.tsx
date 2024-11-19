import { useEffect, useRef, useState } from "react";
import Button from "../components/elements/button/Button";
import CardProduct from "../components/fragments/CardProduct";
import getProducts from "../services/products.service";

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

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [card, setCard] = useState<CardItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const savedCard = localStorage.getItem("card");
    if (savedCard) {
      setCard(JSON.parse(savedCard) as CardItem[]);
    }
  }, []);

  useEffect(() => {
    getProducts({callback: (data:Products[]) => {
      setProducts(data);
    }});
  }, []);

  useEffect(() => {
    if (products.length > 0 && card.length > 0) {
      const sum = card.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        if (!product) {
          alert(`Product not found for ID: ${item.id}`);
          return acc;
        }
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("card", JSON.stringify(card));
    }
  }, [card, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const totalPriceRef = useRef<HTMLTableRowElement | null>(null);
  useEffect(() => {
    if (totalPriceRef.current) {
      totalPriceRef.current.style.display =
        card.length > 0 ? "table-row" : "none";
    }
  }, [card]);

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
    <div className="font-poppins">
      <div className="h-14 bg-blue-600 text-sm shadow flex gap-x-4 justify-end items-center px-8">
        {email}
        <Button onClick={handleLogout} classname="bg-black px-6">
          Logout
        </Button>
      </div>
      <div className="flex my-8">
        <div className="flex gap-2 ml-2 flex-wrap w-2/4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
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
          <table className="text-left table-auto border-collapse border-spacing-x-5">
            <thead>
              <tr className="">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && card.map((item) => {
                const product: Products | undefined = products.find(
                  (product) => product.id === item.id
                );

                // Tangani kasus undefined
                if (!product) {
                  return (
                    <tr key={item.id}>
                      <td className="text-slate-500">Product not added yet</td>
                    </tr>
                  );
                }

                return (
                  <tr key={item.id} className="border-b border-slate-500">
                    <td>{product.title.substring(0,10)}...</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <strong>Total Price</strong>
                </td>
                <td>
                  <strong>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
