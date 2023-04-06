import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-big.png';

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 flex items-center justify-center">
        <img src={Logo} alt="logo" className="h-96" />
      </div>
      <div className="flex-1">
        <div className="mb-10">
          <h1 className="text-5xl mb-2 text-gray-200">Login</h1>
          <div className="h-1 w-2/4 bg-yellow-500"></div>
        </div>
        <form action="#" className="space-y-5">
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              className="w-3/4 p-2 rounded-md"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <button className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-md">
            Login
          </button>
        </form>
        <p className="mt-10">
          Don't have an account?{' '}
          <Link to="/register" className="text-yellow-500">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
