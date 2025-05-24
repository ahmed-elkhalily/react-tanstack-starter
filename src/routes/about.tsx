import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

// Mock API function to fetch team data
const fetchTeamInfo = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    teamSize: 5,
    founded: '2024',
    mission: 'Building amazing web applications with modern technologies',
    technologies: ['React', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Tailwind CSS'],
  };
};

function AboutPage() {
  // Example of using React Query for data fetching
  const {
    data: teamInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['team-info'],
    queryFn: fetchTeamInfo,
  });

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='mb-8 text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-900'>About Us</h1>
        <p className='mb-8 text-lg text-gray-600'>Learn more about our team and mission</p>
      </div>

      {/* Team Info Section with React Query */}
      <div className='mb-6 rounded-lg bg-white p-6 shadow-md'>
        <h2 className='mb-4 text-2xl font-semibold'>Team Information</h2>

        {isLoading && (
          <div className='flex items-center justify-center py-8'>
            <div className='text-blue-600'>Loading team information...</div>
          </div>
        )}

        {error && (
          <div className='py-4 text-center text-red-600'>Error loading team information</div>
        )}

        {teamInfo && (
          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <h3 className='mb-2 font-semibold text-gray-800'>Quick Facts</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>
                  <strong>Team Size:</strong> {teamInfo.teamSize} members
                </li>
                <li>
                  <strong>Founded:</strong> {teamInfo.founded}
                </li>
              </ul>
            </div>

            <div>
              <h3 className='mb-2 font-semibold text-gray-800'>Our Mission</h3>
              <p className='text-gray-600'>{teamInfo.mission}</p>
            </div>
          </div>
        )}
      </div>

      {/* Technologies Section */}
      {teamInfo && (
        <div className='rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6'>
          <h2 className='mb-4 text-2xl font-semibold'>Technologies We Use</h2>
          <div className='flex flex-wrap gap-2'>
            {teamInfo.technologies.map((tech, index) => (
              <span
                key={index}
                className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className='mt-8 text-center'>
        <h2 className='mb-4 text-2xl font-semibold'>Get In Touch</h2>
        <p className='mb-4 text-gray-600'>
          Interested in working with us? We&apos;d love to hear from you!
        </p>
        <button className='rounded-lg bg-indigo-500 px-6 py-2 font-bold text-white transition-colors hover:bg-indigo-700'>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
});
