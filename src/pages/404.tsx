import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};
const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="flex flex-col font-poppins justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p className="text-sm text-slate-800 mt-4">Sorry, an unexapected error has occured</p>
      <p className="text-sm text-slate-800 underline">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
