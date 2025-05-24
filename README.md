# React TanStack Starter

A modern React application built with the latest technologies for optimal developer experience and performance.

## 🚀 Tech Stack

- **⚡ Vite** - Lightning fast build tool
- **⚛️ React 19** - Latest React with concurrent features
- **🧭 TanStack Router** - Type-safe routing
- **🔄 TanStack Query** - Powerful data synchronization
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **📝 TypeScript** - Type safety and better DX
- **🔧 ESLint & Prettier** - Code quality and formatting

## ✨ Features

- 🏠 **Home Page** - Interactive demo with React Query integration
- 📄 **About Page** - Team information with data fetching examples
- 🔄 **Data Fetching** - React Query with loading states and error handling
- 🧭 **Type-safe Routing** - TanStack Router with automatic route generation
- 🎨 **Modern UI** - Tailwind CSS with responsive design
- 🛠️ **Developer Tools** - React Query and Router devtools included
- 📱 **Responsive Design** - Mobile-first approach

## 🏗️ Project Structure

This project follows a **feature-based architecture** with clear separation of concerns:

```
src/
├── app/                 # App-level configuration
│   ├── store/          # Global state management (Zustand, Redux, etc.)
│   ├── router/         # Routing configuration and guards
│   └── providers/      # Context providers and app-level wrappers
├── shared/              # Shared across entire application
│   ├── components/
│   │   ├── ui/         # Reusable design system components (Button, Input, Modal)
│   │   └── layout/     # Layout components (Header, Footer, Sidebar)
│   ├── hooks/          # Custom hooks used across features
│   ├── utils/          # Utility functions and helpers
│   ├── services/       # API services and external integrations
│   ├── constants/      # Application-wide constants
│   └── types/          # Shared TypeScript type definitions
├── features/            # Business logic organized by domain
│   ├── authentication/
│   │   ├── components/ # Feature-specific components
│   │   ├── hooks/      # Feature-specific hooks
│   │   ├── services/   # API calls related to authentication
│   │   ├── store/      # Feature-specific state management
│   │   ├── types/      # Feature-specific types
│   │   └── index.ts    # Barrel export for the feature
│   └── user-management/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── store/
│       ├── types/
│       └── index.ts
├── pages/               # Route components that compose features
├── routes/              # TanStack Router route definitions
├── assets/              # Static assets (images, icons, fonts)
└── styles/              # Global styles and CSS files
```

### 📁 Directory Explanations

#### **`app/`** - Application Configuration
- **`store/`** - Global state management setup (Zustand stores, Redux slices)
- **`router/`** - Router configuration, route guards, and navigation utilities
- **`providers/`** - React context providers, theme providers, auth providers

#### **`shared/`** - Reusable Code
- **`components/ui/`** - Design system components (Button, Input, Card, Modal)
- **`components/layout/`** - Layout components (Header, Footer, Sidebar, Navigation)
- **`hooks/`** - Custom hooks used across multiple features
- **`utils/`** - Pure utility functions (formatters, validators, helpers)
- **`services/`** - API clients, external service integrations
- **`constants/`** - Application constants (API URLs, routes, storage keys)
- **`types/`** - Shared TypeScript interfaces and types

#### **`features/`** - Business Logic
Each feature is self-contained with its own:
- **`components/`** - Components specific to this feature
- **`hooks/`** - Hooks that encapsulate feature logic
- **`services/`** - API calls and data fetching for this feature
- **`store/`** - State management specific to this feature
- **`types/`** - TypeScript types for this feature
- **`index.ts`** - Barrel export file for clean imports

#### **`pages/`** - Route Components
- Components that represent full pages
- Compose multiple features together
- Handle page-level concerns (SEO, analytics)

#### **`routes/`** - TanStack Router
- Route definitions and configurations
- Automatically generated route tree

### 🔄 Import Patterns

```typescript
// Feature imports (barrel exports)
import { LoginForm, useAuth } from '@/features/authentication'
import { UserList, useUsers } from '@/features/user-management'

// Shared utilities
import { Button, Modal } from '@/shared/components/ui'
import { formatDate, debounce } from '@/shared/utils'
import { apiService } from '@/shared/services'

// Types
import type { User, ApiResponse } from '@/shared/types'
```

### 🎯 Benefits of This Structure

1. **🔍 Easy to Navigate** - Clear separation of concerns
2. **🔄 Reusable Code** - Shared components and utilities
3. **🧩 Modular Features** - Self-contained business logic
4. **📈 Scalable** - Easy to add new features without affecting existing code
5. **🛠️ Maintainable** - Clear boundaries and responsibilities
6. **👥 Team Friendly** - Multiple developers can work on different features
7. **🧪 Testable** - Isolated features are easier to test

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmed-elkhalily/react-tanstack-starter.git
cd react-tanstack-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run routes:generate` - Generate route tree (automatic with Vite plugin)

## 🔧 Configuration

### TanStack Router

Routes are automatically generated from the `src/routes/` directory. The configuration is in `tsr.config.json`.

### TanStack Query

Query client is configured in `src/main.tsx` with React Query Devtools enabled in development.

### Tailwind CSS

Configured with PostCSS in `postcss.config.js` and `tailwind.config.js`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ahmed-elkhalily/react-tanstack-starter)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ahmed-elkhalily/react-tanstack-starter)

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TanStack](https://tanstack.com/) for the amazing router and query libraries
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
