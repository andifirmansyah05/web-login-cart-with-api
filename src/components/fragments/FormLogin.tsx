import { useEffect, useRef, useState } from "react";
import Button from "../elements/button/Button";
import InputForm from "../elements/inputs";
import { login } from "../../services/auth.service";



const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const data = {
      username: (form.elements.namedItem("username") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        // console.log(res)
        setLoginFailed(res);
        // console.log(response.response.data);
      }
    });
  };

  const usernameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    usernameRef.current?.focus(); // current? -> akan mengembalikan undefined jika null
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {loginFailed && (
        <p className="text-sm text-center text-red-500">{loginFailed}</p>
      )}
      <InputForm
        name="username"
        type="text"
        title="Username"
        placeholder="John Doe"
        ref={usernameRef}
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
