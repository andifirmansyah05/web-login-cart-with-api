import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classname?: string;
}

const Button = ({
  children,
  classname = "bg-blue-500",
}: ButtonProps) => {
  return (
    <button
      className={`${classname} text-white rounded py-2 font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
