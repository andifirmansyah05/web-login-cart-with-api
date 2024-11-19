import { forwardRef } from "react";

interface InputsProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputsProps>(({ name, type, placeholder }, ref) => {
  return (
    <input
      name={name}
      id={name}
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:opacity-50"
      placeholder={placeholder}
      ref={ref}
    />
  );
})

export default Input;
