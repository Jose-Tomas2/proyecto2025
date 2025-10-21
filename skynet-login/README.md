# SkyNet S.A. Login Project

## Overview
This project is a login system for SkyNet S.A. built using TypeScript and Express. It provides user authentication functionalities, including login and registration.

## Project Structure
```
skynet-login
├── src
│   ├── app.ts                # Main application file
│   ├── server.ts             # Server entry point
│   ├── controllers           # Contains authentication controllers
│   │   └── authController.ts  # Handles user authentication logic
│   ├── routes                # Defines application routes
│   │   └── auth.ts           # Authentication routes
│   ├── models                # Data models
│   │   └── user.ts           # User model definition
│   ├── services              # Business logic services
│   │   └── authService.ts    # Authentication service
│   ├── middleware            # Middleware functions
│   │   └── authMiddleware.ts  # Authentication middleware
│   ├── config                # Configuration settings
│   │   └── index.ts          # Configuration exports
│   └── types                 # TypeScript types
│       └── index.ts          # Type definitions
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd skynet-login
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the application at `http://localhost:3000`.

## Features
- User registration
- User login
- Token-based authentication
- Middleware for protecting routes

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.