import Button from "../elements/button/Button";
interface HeaderProps {
  image: string;
}

interface BodyProps {
  title: string;
  children: string;
}

interface FooterProps {
  price: number;
  handleAddToCard: (id:number) => void;
  id: number;
}

interface CardProductProps {
  children: React.ReactNode;
}

const CardProduct = ({ children }: CardProductProps) => {
  return (
    <div className="w-full max-w-xs mx-1 flex flex-col justify-between font-poppins bg-white border border-gray-100 rounded-lg shadow-2xl">
      {children}
    </div>
  );
};

function Header({ image }: HeaderProps) {
  return (
    <a>
      <img className="w-full h-60 object-cover p-5" src={image} alt="product" />
    </a>
  );
}

function Body({ title, children }: BodyProps) {
  return (
    <div className="px-5 pb-5 grow">
      <a href="">
        <h5 className="text-xl font-semibold text-slate-900">{title.substring(0,20)}...</h5>
        <p className="text-slate-800">{children.substring(0,100)}...</p>
      </a>
    </div>
  );
}

function Footer({ price, handleAddToCard, id }: FooterProps) {
  return (
    <div className="px-5 flex justify-between items-center mb-8">
      <span className="text-sm font-bold text-slate-800">{price.toLocaleString("id-ID", {style: "currency", currency: "USD"})}</span>
      <Button onClick={() => handleAddToCard(id)} classname="text-sm bg-blue-600 px-6 hover:bg-blue-800">Add to cart</Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
