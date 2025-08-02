export default function Portfolio() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Your Portfolio</h2>
        <p className="text-gray-600">This is your dynamic site with all your projects and achievements.</p>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded-xl">
              <h3 className="font-semibold">Project 1</h3>
              <p className="text-sm text-gray-500">Tools used: React, Tailwind, Node.js</p>
            </div>
          </div>
        </div>
      </div>
    );
  }