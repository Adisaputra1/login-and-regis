import { Link } from 'react-router-dom';
import FormRegister from '../Components/Fragments/FormRegister';
import AuthLayout from '../Components/Layout/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5">
        Have an account?{' '}
        <Link to="/login" className="font-bold text-button">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};
export default RegisterPage;
