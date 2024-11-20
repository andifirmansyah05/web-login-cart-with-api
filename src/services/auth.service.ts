import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface LoginData {
  username: string;
  password: string;
}

interface JwtContent {
  user: string;
}

interface GetUsernameProps {
  token: string;
}

type LoginCallback = (status: boolean, response: string) => void;

export const login = (data: LoginData, callback: LoginCallback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then(function (response) {
      // console.log(typeof response);
      // console.log(response.data.token);
      callback(true, response.data.token);
    })
    .catch((error) => {
      // console.log(error.response.data);
      callback(false, error.response.data);
    });
};

export const getUsername = ({ token }: GetUsernameProps) => {
  const decoded = jwtDecode<JwtContent>(token);
  return decoded.user;
  //   console.log(decoded);
};
