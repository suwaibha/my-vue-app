import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/projects" className="p-4 bg-white rounded-2xl shadow hover:shadow-md">
          <h3 className="text-lg font-semibold">Manage Projects</h3>
          <p className="text-sm text-gray-500">Track your real-world work and growth</p>
        </Link>
        <Link to="/resume" className="p-4 bg-white rounded-2xl shadow hover:shadow-md">
          <h3 className="text-lg font-semibold">AI Resume Generator</h3>
          <p className="text-sm text-gray-500">Generate smart resumes based on your work</p>
        </Link>
        <Link to="/portfolio" className="p-4 bg-white rounded-2xl shadow hover:shadow-md">
          <h3 className="text-lg font-semibold">Portfolio Site</h3>
          <p className="text-sm text-gray-500">See your hosted portfolio</p>
        </Link>
        <Link to="/recruiter" className="p-4 bg-white rounded-2xl shadow hover:shadow-md">
          <h3 className="text-lg font-semibold">Recruiter View</h3>
          <p className="text-sm text-gray-500">How companies see your profile</p>
        </Link>
      </div>
    </div>
  );
}