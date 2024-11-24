import { Link } from "react-router-dom";
import Button from "../elements/button/Button";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useLogin } from "../../hooks/useLogin";
import { PersonIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  return (
    <div className="h-14 bg-blue-600 text-sm shadow flex gap-x-4 justify-between items-center px-8">
      <div>
        <Link to="/">
          <h1 className="font-poppins font-bold text-xl hover:text-white">
            Root Page
          </h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        {/* agar jadi kapitaal diawal kata */}
        {username.charAt(0).toUpperCase() + username.slice(1)}
        <Button
          onClick={handleLogout}
          classname="bg-black px-6 hover:bg-slate-800 text-xs"
        >
          Logout
        </Button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className=" bg-black text-slate-50 rounded px-6 py-2 text-xs font-bold"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <Link to="/profile">
          <Button classname="w-8 h-8 flex justify-center rounded-full items-center bg-slate-800 hover:bg-slate-700">
            <PersonIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
