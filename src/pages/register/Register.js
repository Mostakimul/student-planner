import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-big.png';
import TextInput from '../../components/form/TextInput';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center">
      <div className="flex-1 flex items-center justify-center">
        <img src={Logo} alt="logo" className="h-96" />
      </div>
      <div className="flex-1">
        <div className="mb-10">
          <h1 className="text-5xl mb-2 text-gray-200">Register</h1>
          <div className="h-1 w-2/4 bg-yellow-500"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <TextInput
            type="text"
            name="name"
            register={register}
            placeholder="Your name"
            required
          />
          <TextInput
            type="email"
            name="email"
            register={register}
            placeholder="Enter email"
            required
          />
          <TextInput
            type="text"
            name="university"
            register={register}
            placeholder="University name"
            required
          />
          <TextInput
            type="password"
            name="password"
            register={register}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-md"
          >
            Create Account
          </button>
        </form>
        <p className="mt-10">
          Already have an account?{' '}
          <Link to="/" className="text-yellow-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
