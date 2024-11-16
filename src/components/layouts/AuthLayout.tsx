import { ReactNode } from "react";

interface AuthProps {
  title: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: AuthProps) => {
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, Please enter your details
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;