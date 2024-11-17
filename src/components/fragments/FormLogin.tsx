import Button from "../elements/button/Button";
import InputForm from "../elements/inputs";

const FormLogin = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/products";
    console.log("login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="email"
        type="email"
        title="Email"
        placeholder="example@mail.com"
      />
      <InputForm
        name="password"
        type="password"
        title="Password"
        placeholder="******"
      />
      <Button type="submit" classname="w-full bg-blue-600">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
