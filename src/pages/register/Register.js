import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-big.png';

const Register = () => {
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
        <form action="#" className="space-y-5">
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="email"
              id="email"
              placeholder="University name"
              required
            />
          </div>
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-md">
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
