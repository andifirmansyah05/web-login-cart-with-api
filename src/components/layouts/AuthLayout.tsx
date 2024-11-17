import { ReactNode } from "react";

interface AuthProps {
  title: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: AuthProps) => {
  return (
    <div className="flex gap-4 justify-center items-center min-h-screen font-poppins">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
