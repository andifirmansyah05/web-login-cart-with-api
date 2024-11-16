import Input from "./Input";
import Label from "./Label";

interface InputForomProps {
  name: string;
  type: string;
  title: string;
  placeholder: string;
}

const InputForm = ({ name, type, title, placeholder }: InputForomProps) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
