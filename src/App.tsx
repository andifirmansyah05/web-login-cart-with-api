import { Link } from "react-router-dom";
import Button from "./components/elements/button/Button";

export default function App() {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center h-screen">
      <h1 className="text-2xl font-bold font-poppins">Root Page</h1>

      <div className="flex gap-x-9">
        <Button classname="bg-green-500 w-20">
          <Link to="/login">Login</Link>
        </Button>
        <Button classname="bg-blue-600 w-20">
          <Link to="/register">Register</Link>
        </Button>
        <Button classname="bg-amber-500 w-20">
          <Link to="/products">Product</Link>
        </Button>
      </div>
    </div>
  );
}
