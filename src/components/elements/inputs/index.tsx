import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

interface InputFormProps {
  name: string;
  type: string;
  title: string;
  placeholder: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ name, type, title, placeholder }, ref) => {
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{title}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref} // Meneruskan ref ke elemen Input
        />
      </div>
    );
  }
);

export default InputForm;
