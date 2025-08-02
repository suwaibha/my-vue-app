import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-xl"
          />
          <button className="w-full bg-green-600 text-white p-2 rounded-xl hover:bg-green-700">
            Create Account
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}