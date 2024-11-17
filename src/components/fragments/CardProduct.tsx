import Button from "../elements/button/Button";
interface HeaderProps {
  image: string;
}

interface BodyProps {
  title: string;
  children: React.ReactNode;
}

interface FooterProps {
  price: string | number; // You can change this to match your use case
}

interface CardProductProps {
  children: React.ReactNode;
}

const CardProduct = ({ children }: CardProductProps) => {
  return (
    <div className="w-full max-w-sm font-sans bg-white border border-gray-100 rounded-lg shadow">
      {children}
    </div>
  );
};

function Header({ image }: HeaderProps) {
  return (
    <a>
      <img className=" p-5 rounded-t-lg" src={image} alt="product" />
    </a>
  );
}

function Body({ title, children }: BodyProps) {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
        <p className="">{children}</p>
      </a>
    </div>
  );
}

function Footer({ price }: FooterProps) {
  return (
    <div className="px-5 flex justify-between items-center mb-8">
      <span>{price}</span>
      <Button classname="bg-blue-600 px-6 hover:bg-blue-800">Add to cart</Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
