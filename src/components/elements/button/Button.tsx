import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  classname = "bg-blue-500",
  onClick,
  type = "button",
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
