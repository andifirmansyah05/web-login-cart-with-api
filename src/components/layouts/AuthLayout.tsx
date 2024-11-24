import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

interface AuthProps {
  title: string;
  children: ReactNode;
  type: string;
}

const AuthLayout = ({ title, children, type }: AuthProps) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex gap-4 justify-center items-center min-h-screen font-poppins ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-sm">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="absolute top-2 right-2 bg-blue-600 text-slate-50 rounded w-16 py-1 text-xs">{isDarkMode ? "Light" : "Dark"}</button>
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
