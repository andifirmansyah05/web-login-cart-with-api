import { Link } from "react-router-dom"
import FormLogin from "../components/fragments/FormLogin"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <FormLogin />
        <p className="text-sm text-center mt-2">Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
    </AuthLayout>
  )
}

export default LoginPage