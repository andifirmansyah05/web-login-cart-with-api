import { FC, useContext, useEffect, useRef, useState } from "react";
import { DarkMode } from "../../context/DarkMode";

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

interface TableCartProps {
  products: Products[];
  card: CardItem[];
}

const TableCart: FC<TableCartProps> = ({ products, card}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

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

  const totalPriceRef = useRef<HTMLTableRowElement | null>(null);
  useEffect(() => {
    if (totalPriceRef.current) {
      totalPriceRef.current.style.display =
        card.length > 0 ? "table-row" : "none";
    }
  }, [card]);


  return (
    <table className={`text-left table-auto border-collapse border-spacing-x-5 ${isDarkMode && "text-slate-50 "}`}>
      <thead>
        <tr className="">
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          card.map((item) => {
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
                <td>{product.title.substring(0, 10)}...</td>
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
  );
};

export default TableCart;
