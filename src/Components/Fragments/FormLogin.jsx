import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button';

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />

      <Button variant="bg-button w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
