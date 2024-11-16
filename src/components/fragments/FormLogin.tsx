import Button from "../elements/button/Button";
import InputForm from "../elements/inputs";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm name="email" type="email" title="Email" placeholder="example@mail.com" />
      <InputForm name="password" type="password" title="Password" placeholder="******" />
      <Button classname="w-full bg-blue-600">Login</Button>
    </form>
  );
};

export default FormLogin;
