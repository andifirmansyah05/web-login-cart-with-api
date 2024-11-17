import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthProps {
  title: string;
  children: ReactNode;
  type: string;
}

const AuthLayout = ({ title, children, type }: AuthProps) => {
  return (
    <div className="flex gap-4 justify-center items-center min-h-screen font-poppins">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm text-center mt-2">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
