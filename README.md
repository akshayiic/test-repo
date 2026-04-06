# CodeRabbit Test Repository

This repository is used to test CodeRabbit's AI code review capabilities with JavaScript/Node.js projects.

## Purpose

Testing CodeRabbit integration and review features on pull requests.

## Setup

1. Create a new GitHub repository
2. Push this code to the repository
3. Enable CodeRabbit integration
4. Create PRs to test code review functionality

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Running Linter

```bash
npm run lint
```

## Sample Code

Contains various sample files to test different code review scenarios:
- JavaScript calculator module (`src/calculator.js`)
- Utility functions (`src/utils.js`)
- Jest test files
- ESLint configuration

## Intentional Issues for Testing

This repository includes some intentional code issues to test CodeRabbit's detection capabilities:
- Missing JSDoc comments on some functions
- TODO comments for unimplemented error handling
- Unused variables
- Missing test coverage for edge cases

## Why This is Required for CodeRabbit Testing

**1. Pull Request Reviews**: CodeRabbit needs PRs to review. The intentional issues in this code will trigger CodeRabbit's AI to provide feedback.

**2. CI/CD Integration**: The GitHub Actions workflow (`.github/workflows/test.yml`) demonstrates how CodeRabbit integrates with your CI pipeline.

**3. Code Quality Checks**: The ESLint setup and Jest tests provide context for CodeRabbit to analyze code quality and suggest improvements.

**4. Real-world Scenarios**: This repo mimics a real JavaScript project structure, allowing you to see how CodeRabbit handles:
   - Function documentation
   - Error handling suggestions
   - Test coverage feedback
   - Code style recommendations
   - Security vulnerabilities detection
   - Performance optimization suggestions
