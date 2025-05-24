import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">
                  React TanStack
                </h1>
              </div>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-blue-600 [&.active]:font-semibold"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-blue-600 [&.active]:font-semibold"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/ahmed-elkhalily/react-tanstack-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            Built with ❤️ using React, TanStack Router, TanStack Query, and Tailwind CSS
          </div>
        </div>
      </footer>

      {/* Development Tools */}
      <TanStackRouterDevtools />
    </>
  ),
}) 