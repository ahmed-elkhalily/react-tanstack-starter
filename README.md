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

## 🏗️ Project Structure

```
src/
├── routes/           # Route components
│   ├── __root.tsx   # Root layout
│   ├── index.tsx    # Home page
│   └── about.tsx    # About page
├── main.tsx         # App entry point
├── index.css        # Global styles
└── routeTree.gen.ts # Generated route tree
```

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
