import FormLogin from "../components/fragments/FormLogin"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <FormLogin />
    </AuthLayout>
  )
}

export default LoginPage