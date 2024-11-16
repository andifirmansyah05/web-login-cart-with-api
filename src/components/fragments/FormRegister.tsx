import Button from "../elements/button/Button";
import InputForm from "../elements/inputs";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm name="fullName" type="text" title="Fullname" placeholder="Insert your name here...." />
      <InputForm name="email" type="email" title="Email" placeholder="example@mail.com" />
      <InputForm name="password" type="password" title="Password" placeholder="******" />
      <InputForm name="confirmPassword" type="password" title="Confirm Password" placeholder="******" />
      <Button classname="w-full bg-blue-600">Login</Button>
    </form>
  );
};

export default FormRegister;
