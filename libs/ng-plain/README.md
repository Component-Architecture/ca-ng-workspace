# Ng-Plain Component Library

This library provides Angular components with complete logic that can be easily used and customized in your Angular projects. The components themselves have only a minimal HTML skeleton, but they provide all the necessary functionality to work properly.

## Motivation

The goal of this library is to provide Angular components with complete logic, while allowing users to customize their appearance and behavior as much as possible. By providing a minimal HTML skeleton, we give users the flexibility to style and combine our components in whichever way they prefer, without compromising on functionality.

This library is part of the Component Architecture monorepo, which is a collection of Angular applications, libraries, and utilities, organized using Nx CLI. All development work for this library is happening in the monorepo repository.

## Features

- Complete logic for each component, making them ready to use out-of-the-box.
- Minimal HTML skeleton, allowing for greater customization and flexibility.
- Designed to be compatible with other Angular directives and components.
- Lightweight and efficient, with no unnecessary dependencies.
- Clean codebase and documentation, making it easy to understand and contribute to the project.

## Prerequisites

- Node.js
- Angular CLI
- Nx CLI

## Installation

To install this component library, simply run:

```bash
npm install @ca/ng-plain
```

## Usage

After installation, you can import and use the library components in your Angular project like this:

```typescript
import { Component1, Component2 } from '{your-library-name}';

@Component({
  selector: 'app-root',
  template: `
    <lib-component1 [inputProp]="myData"></lib-component1>
    <lib-component2></lib-component2>
  `
})
export class AppComponent {}
```

Note that you can also style and customize your components further by wrapping them in another component or by using a custom directive.

## Available Components

Here are the components currently available in this library:

- `Component1`: The first component with complete logic.
- `Component2`: The second component with complete logic.

## Contributing

If you find any issues or have suggestions for improvement, feel free to create an issue or pull request on our GitHub repository. We welcome contributions in the form of bug fixes, feature requests, documentation improvements, code optimizations, and more. Note that development work for this library is happening in the Component Architecture monorepo repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Lib-Development

## Running unit tests

Run `nx test ng-plain` to execute the unit tests.
