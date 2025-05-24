import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

// Mock API function to demonstrate React Query
const fetchWelcomeMessage = async (): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'Welcome to your React App with TanStack Router and Query!'
}

function HomePage() {
  const [count, setCount] = useState(0)

  // Example of using React Query
  const { data: welcomeMessage, isLoading, error } = useQuery({
    queryKey: ['welcome'],
    queryFn: fetchWelcomeMessage,
  })

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React TanStack Starter
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A modern React application with the best developer experience
        </p>
        
        {/* React Query Example */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">React Query Demo</h2>
          {isLoading && (
            <div className="text-blue-600">Loading welcome message...</div>
          )}
          {error && (
            <div className="text-red-600">Error loading message</div>
          )}
          {welcomeMessage && (
            <div className="text-green-600 font-medium">{welcomeMessage}</div>
          )}
        </div>

        {/* Counter Example */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Interactive Counter</h2>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Count is {count}
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Built with Vite for instant hot module replacement</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🧭</div>
            <h3 className="font-semibold mb-2">Type-safe Routing</h3>
            <p className="text-gray-600 text-sm">TanStack Router with full TypeScript support</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold mb-2">Smart Data Fetching</h3>
            <p className="text-gray-600 text-sm">TanStack Query for caching and synchronization</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold mb-2">Beautiful UI</h3>
            <p className="text-gray-600 text-sm">Tailwind CSS for rapid styling</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-semibold mb-2">Type Safety</h3>
            <p className="text-gray-600 text-sm">Full TypeScript integration</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🛠️</div>
            <h3 className="font-semibold mb-2">Developer Tools</h3>
            <p className="text-gray-600 text-sm">Built-in devtools for debugging</p>
          </div>
        </div>

        <div className="text-gray-600">
          <p className="mb-4">This starter includes:</p>
          <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
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
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
}) 