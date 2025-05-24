import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

// Mock API function to fetch team data
const fetchTeamInfo = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  return {
    teamSize: 5,
    founded: '2024',
    mission: 'Building amazing web applications with modern technologies',
    technologies: ['React', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Tailwind CSS']
  }
}

function AboutPage() {
  // Example of using React Query for data fetching
  const { data: teamInfo, isLoading, error } = useQuery({
    queryKey: ['team-info'],
    queryFn: fetchTeamInfo,
  })

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn more about our team and mission
        </p>
      </div>

      {/* Team Info Section with React Query */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Team Information</h2>
        
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="text-blue-600">Loading team information...</div>
          </div>
        )}
        
        {error && (
          <div className="text-red-600 text-center py-4">
            Error loading team information
          </div>
        )}
        
        {teamInfo && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Team Size:</strong> {teamInfo.teamSize} members</li>
                <li><strong>Founded:</strong> {teamInfo.founded}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">{teamInfo.mission}</p>
            </div>
          </div>
        )}
      </div>

      {/* Technologies Section */}
      {teamInfo && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
          <div className="flex flex-wrap gap-2">
            {teamInfo.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-4">
          Interested in working with us? We'd love to hear from you!
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
}) 