# Contributing

## Usage

```bash
# Install dependencies
npm install

# Build 
npm run build

# Run all tests with lint/jest
npm run test

# Run test in watch mode
npm run test:watch

# Update test snapshot
npm run test:update

# Run linter
npm run lint

# Run linter with auto fix
npm run lint:fix
```
## Workflow

- Create a component in the src/components folder
- Add tests in the src/components/\_\_tests\_\_ folder
- Register this component in src/index.js
- Run lint and tests before commiting anything
- Commit using [Commit Convention](./COMMIT_CONVENTION.md) 
- PR on github
