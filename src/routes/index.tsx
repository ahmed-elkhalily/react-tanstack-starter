import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Mock API function to demonstrate React Query
const fetchWelcomeMessage = async (): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 'Welcome to your React App with TanStack Router and Query!';
};

function HomePage() {
  const [count, setCount] = useState(0);

  // Example of using React Query
  const {
    data: welcomeMessage,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['welcome'],
    queryFn: fetchWelcomeMessage,
  });

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='mb-8 text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-900'>React TanStack Starter</h1>
        <p className='mb-8 text-lg text-gray-600'>
          A modern React application with the best developer experience
        </p>

        {/* Tailwind CSS Test Section */}
        <div className='mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white'>
          <h2 className='mb-2 text-xl font-semibold'>🎨 Tailwind CSS is Working!</h2>
          <p className='text-sm opacity-90'>
            If you can see this colorful gradient background, Tailwind CSS is properly configured!
          </p>
        </div>

        {/* React Query Example */}
        <div className='mb-6 rounded-lg bg-blue-50 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>React Query Demo</h2>
          {isLoading && <div className='text-blue-600'>Loading welcome message...</div>}
          {error && <div className='text-red-600'>Error loading message</div>}
          {welcomeMessage && <div className='font-medium text-green-600'>{welcomeMessage}</div>}
        </div>

        {/* Counter Example */}
        <div className='mb-6 rounded-lg bg-gray-50 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>Interactive Counter</h2>
          <button
            onClick={() => setCount(count + 1)}
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700'
          >
            Count is {count}
          </button>
        </div>

        {/* Features Grid */}
        <div className='mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>⚡</div>
            <h3 className='mb-2 font-semibold'>Lightning Fast</h3>
            <p className='text-sm text-gray-600'>
              Built with Vite for instant hot module replacement
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>🧭</div>
            <h3 className='mb-2 font-semibold'>Type-safe Routing</h3>
            <p className='text-sm text-gray-600'>TanStack Router with full TypeScript support</p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>🔄</div>
            <h3 className='mb-2 font-semibold'>Smart Data Fetching</h3>
            <p className='text-sm text-gray-600'>TanStack Query for caching and synchronization</p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>🎨</div>
            <h3 className='mb-2 font-semibold'>Beautiful UI</h3>
            <p className='text-sm text-gray-600'>Tailwind CSS for rapid styling</p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>📝</div>
            <h3 className='mb-2 font-semibold'>Type Safety</h3>
            <p className='text-sm text-gray-600'>Full TypeScript integration</p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-md'>
            <div className='mb-2 text-2xl'>🛠️</div>
            <h3 className='mb-2 font-semibold'>Developer Tools</h3>
            <p className='text-sm text-gray-600'>Built-in devtools for debugging</p>
          </div>
        </div>

        <div className='text-gray-600'>
          <p className='mb-4'>This starter includes:</p>
          <ul className='mx-auto max-w-md list-inside list-disc space-y-1 text-left'>
            <li>⚡ Vite + React 19</li>
            <li>🧭 TanStack Router for routing</li>
            <li>🔄 TanStack Query for data fetching</li>
            <li>🎨 Tailwind CSS for styling</li>
            <li>📝 TypeScript for type safety</li>
            <li>🔧 ESLint & Prettier for code quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});
