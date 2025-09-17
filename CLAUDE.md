# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

CoreUI for React is a comprehensive React.js components library built on top of Bootstrap 5 and TypeScript. It's organized as a monorepo using Lerna with multiple packages including the main React component library, icons, charts, and documentation.

## Repository Structure

This is a **Lerna monorepo** with the following key packages:
- `packages/coreui-react/` - Main React components library (TypeScript)
- `packages/coreui-icons-react/` - Icon components for React
- `packages/coreui-react-chartjs/` - Chart.js integration for React
- `packages/docs/` - Gatsby-based documentation site

## Development Commands

### Root Level Commands
- `npm run lint` - Lint all packages
- `npm run test` - Run tests for all packages  
- `npm run test:update` - Update snapshots for all packages

### Package-Specific Commands (using Lerna)
- `npm run lib:build` - Build main React library
- `npm run lib:test` - Test main React library only
- `npm run lib:test:update` - Update main library test snapshots
- `npm run icons:build` - Build icons package
- `npm run charts:build` - Build charts package
- `npm run docs:dev` - Start documentation dev server
- `npm run docs:build` - Build documentation

### Working with Individual Packages
Navigate to specific packages to run commands directly:
```bash
cd packages/coreui-react
npm test -- src/components/focus-trap/__tests__/CFocusTrap.spec.tsx  # Run specific test
npm run build  # Build this package only
```

### Running Single Tests
To run a specific test file:
```bash
cd packages/coreui-react
npm test -- path/to/test.spec.tsx
```

## Architecture

### Component Organization
Each component follows a consistent structure:
```
components/[component-name]/
├── C[ComponentName].tsx        # Main component
├── C[ComponentName]Part.tsx    # Sub-components  
├── index.ts                    # Exports
├── types.ts                    # TypeScript types (if complex)
├── utils.ts                    # Utility functions (if any)
├── const.ts                    # Constants (if any)
└── __tests__/                  # Tests and snapshots
    ├── C[ComponentName].spec.tsx
    └── __snapshots__/
```

### Component Development Patterns

**Props Interface**: All components have well-documented TypeScript interfaces with JSDoc comments focusing on accessibility and SEO benefits.

**Ref Forwarding**: Components forward refs properly to DOM elements for accessibility and integration.

**Testing**: Uses React Testing Library with Jest, focusing on behavior over implementation details. Each component has snapshot tests and behavioral tests.

**Styling**: Components use Bootstrap 5 classes and are compatible with `@coreui/coreui` CSS library.

### Key Development Principles

**TypeScript First**: All components are written in TypeScript with proper type definitions.

**Accessibility Focus**: Components implement WCAG 2.1 standards and include proper ARIA attributes.

**Bootstrap Compatible**: Components extend Bootstrap 5 functionality while maintaining compatibility.

**No Extra DOM**: Many components avoid adding wrapper elements, using ref merging instead (see `focus-trap` component).

**Utility Separation**: Complex components separate utilities into dedicated files (`utils.ts`, `const.ts`).

## Testing

### Test Structure
- Snapshot tests for UI consistency
- Behavioral tests for user interactions  
- Accessibility tests for focus management
- Props validation tests

### Test Environment
- Jest with JSDOM environment
- React Testing Library for component testing
- `@testing-library/jest-dom` for DOM assertions

### Running Tests
Tests are run at the package level. Some complex focus management tests may not work perfectly in JSDOM but will work in real browsers.

## Build System

### Rollup Configuration
Each package uses Rollup for building:
- ESM and CommonJS outputs
- TypeScript compilation
- Separate bundles for different environments

### Package Dependencies
- `@coreui/coreui` - Core CSS library
- `@popperjs/core` - For positioning (tooltips, dropdowns)
- `prop-types` - Runtime type checking
- React 17+ peer dependency

## Component Development

### Creating New Components
1. Follow the directory structure pattern
2. Use TypeScript interfaces with comprehensive JSDoc
3. Implement proper ref forwarding
4. Add comprehensive tests (snapshot + behavioral)
5. Export from package index files
6. Consider accessibility from the start

### Refactoring Components
When refactoring complex components:
1. Separate utilities into `utils.ts` and constants into `const.ts`
2. Maintain backward compatibility with existing props
3. Update tests to match new structure
4. Keep the same export interface

### Focus Management
For components requiring focus management (modals, dropdowns), use the patterns established in the `focus-trap` component, which implements proper Tab/Shift+Tab cycling and external focus redirection.