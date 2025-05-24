# Linting and Formatting Setup

This project is configured with comprehensive linting and formatting tools to ensure code quality and consistency.

## Tools Configured

### ESLint

- **Purpose**: Static code analysis to find and fix problems
- **Configuration**: `eslint.config.js` (ESLint 9+ flat config)
- **Plugins**:
  - `@typescript-eslint` - TypeScript-specific rules
  - `eslint-plugin-react` - React-specific rules
  - `eslint-plugin-react-hooks` - React Hooks rules
  - `eslint-plugin-react-refresh` - React Fast Refresh rules
  - `@tanstack/eslint-plugin-query` - TanStack Query best practices
  - `eslint-plugin-tailwindcss` - Tailwind CSS class validation and ordering

### Prettier

- **Purpose**: Code formatting
- **Configuration**: `.prettierrc.cjs`
- **Plugins**:
  - `prettier-plugin-tailwindcss` - Automatic Tailwind class sorting

### VS Code Integration

- **Auto-format on save**: Enabled
- **Auto-fix ESLint issues on save**: Enabled
- **Import organization**: Automatic
- **Configuration**: `.vscode/settings.json`

### Pre-commit Hooks

- **Tool**: Husky + lint-staged
- **Purpose**: Ensure code quality before commits
- **Configuration**: `.husky/pre-commit` and `package.json`

## Available Scripts

```bash
# Linting
npm run lint          # Run ESLint with error reporting
npm run lint:check    # Check for linting issues without fixing
npm run lint:fix      # Auto-fix linting issues

# Formatting
npm run format        # Format all files with Prettier
npm run format:check  # Check if files are properly formatted

# Type checking
npm run type-check    # Run TypeScript compiler without emitting files

# Combined checks
npm run check-all     # Run type-check, lint:check, and format:check
npm run fix-all       # Run lint:fix and format
```

## ESLint Rules Configured

### React Rules

- Proper JSX usage
- Hook rules compliance
- No prop-types (using TypeScript instead)
- React 18+ JSX transform support

### TypeScript Rules

- No unused variables (with underscore prefix exception)
- Consistent type imports
- No explicit any (warning)
- No non-null assertions (warning)

### TanStack Query Rules

- Proper query key usage
- Query function best practices
- Mutation handling

### Tailwind CSS Rules

- Class name ordering
- Shorthand enforcement
- Migration warnings for v2 → v3
- No contradicting classes

### General Best Practices

- Prefer const over let
- No var usage
- Object shorthand
- Template literals over concatenation
- Strict equality (===)
- Curly braces for all control statements

## VS Code Extensions Recommended

The following extensions are recommended for the best development experience:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **TypeScript Importer** (`pmneo.tsimporter`)
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
- **Path Intellisense** (`christian-kohler.path-intellisense`)
- **Error Lens** (`usernamehw.errorlens`)

## Pre-commit Hook

The pre-commit hook automatically:

1. Runs ESLint with auto-fix on staged TypeScript/React files
2. Runs Prettier on all staged files
3. Prevents commit if there are unfixable linting errors

## File Ignoring

The following files/directories are ignored from linting and formatting:

- `dist/` - Build output
- `node_modules/` - Dependencies
- `*.gen.ts` - Generated files
- `routeTree.gen.ts` - TanStack Router generated routes
- `vite.config.ts` - Vite configuration
- `src/vite-env.d.ts` - Vite environment types

## Usage Tips

1. **Save files in VS Code** to automatically format and fix linting issues
2. **Run `npm run check-all`** before pushing to ensure code quality
3. **Use `npm run fix-all`** to quickly fix most formatting and linting issues
4. **The pre-commit hook** will catch issues before they reach the repository

## Troubleshooting

### ESLint Warnings

- The warning about `.eslintignore` is expected - we're using the new flat config format
- Ignore this warning as it doesn't affect functionality

### Import Order Issues

- ESLint will automatically fix import ordering when using `--fix`
- Prettier will handle the formatting of imports

### Tailwind Class Order

- Prettier with the Tailwind plugin will automatically sort classes
- ESLint will warn about incorrect ordering but Prettier will fix it
