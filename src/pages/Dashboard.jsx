import { useSelector } from 'react-redux'

export default function Dashboard() {
const user = useAppSelector((state) => state.user.user);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.email}</h2>
        <p className="text-gray-600 mb-4">
          You're successfully authenticated with Supabase and Google OAuth.
        </p>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm font-mono text-gray-800 break-all">
            JWT Token: {user?.id}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Feature {item}</h3>
                <p className="text-gray-500">Description of feature</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View details →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}