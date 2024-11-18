import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classname?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  classname = "bg-blue-500",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classname} text-white rounded py-2 font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
