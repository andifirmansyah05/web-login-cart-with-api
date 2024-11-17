import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm text-center mt-2">Have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>

    </AuthLayout>
  );
};

export default RegisterPage;
