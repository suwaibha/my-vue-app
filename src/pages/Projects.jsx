export default function Projects() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl">Create New Project</button>
        <div className="grid gap-4">
          {/* Sample project card */}
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-lg">Project Title</h3>
            <p className="text-sm text-gray-600">Progress updates, challenges, tools used...</p>
          </div>
        </div>
      </div>
    );
  }