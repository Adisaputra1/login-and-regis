import { Link } from 'react-router-dom';
import FormLogin from '../Components/Fragments/FormLogin';
import AuthLayout from '../Components/Layout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5">
        Don't have an account?{' '}
        <Link to="/register" className="font-bold text-button font-Poppins">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};
export default LoginPage;
