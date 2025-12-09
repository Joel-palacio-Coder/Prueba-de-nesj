<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

RIWI Backend API
A robust, production-ready REST API built with NestJS, TypeORM, PostgreSQL, and JWT authentication. This project demonstrates modern backend development practices with a complete authentication system, role-based authorization, and Docker deployment.

🚀 Features
🔐 JWT Authentication - Secure login/register with token-based authentication

👥 Role-Based Authorization - Admin/User roles with protected routes

🗄️ PostgreSQL Database - Relational data storage with TypeORM

📝 API Documentation - Interactive Swagger/OpenAPI documentation

🧪 Unit Testing - Comprehensive test coverage with Jest

🐳 Docker Support - Containerized development and production environments

🛡️ Input Validation - Request validation using class-validator

🔒 Security - Password hashing, CORS, environment-based configuration

📦 Modular Architecture - Clean, maintainable code structure

🏗️ Tech Stack
Backend Framework: NestJS 10+

Language: TypeScript

Database: PostgreSQL with TypeORM

Authentication: JWT (JSON Web Tokens)

Validation: class-validator, class-transformer

Testing: Jest, Supertest

Documentation: Swagger/OpenAPI 3.0

Containerization: Docker, Docker Compose

Package Manager: npm

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher)

npm (v9 or higher)

PostgreSQL (v15 or higher) - or use Docker

Docker and Docker Compose (optional, for containerized setup)

Git (for version control)

⚙️ Installation
Option 1: Local Development Setup
Clone the repository:

bash
git clone https://github.com/yourusername/riwi-backend.git
cd riwi-backend
Install dependencies:

bash
npm install
Configure environment variables:

bash
cp .env.example .env
Edit the .env file with your configuration:

env

# Database

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=riwi_db
DB_SYNCHRONIZE=true # Set to false in production
DB_LOGGING=false

# JWT

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=1d

# App

PORT=3000
NODE_ENV=development
Start PostgreSQL database:

bash

# Using Docker (recommended)

docker-compose up postgres -d

# Or start your local PostgreSQL service

# Make sure to create the database specified in .env

Run database migrations:

bash
npm run migration:run
Start the development server:

bash
npm run start:dev
Option 2: Docker Setup (Recommended)
Clone and configure:

bash
git clone https://github.com/yourusername/riwi-backend.git
cd riwi-backend
cp .env.example .env
Build and run with Docker Compose:

bash
docker-compose up
This will start both the PostgreSQL database and the NestJS application.

🎮 Usage
API Endpoints
Authentication
Method Endpoint Description Auth Required
POST /auth/register Register a new user No
POST /auth/login Login and get JWT token No
Users (Admin Only)
Method Endpoint Description
GET /users Get all users
GET /users/:id Get user by ID
PATCH /users/:id Update user
DELETE /users/:id Delete user
User Profile
Method Endpoint Description Auth Required
GET /users/profile Get current user profile Yes
Products
Method Endpoint Description Auth Required
POST /products Create a new product Yes
GET /products Get all products Yes
GET /products/:id Get product by ID Yes
PATCH /products/:id Update product Yes (Owner/Admin)
DELETE /products/:id Delete product Yes (Owner/Admin)
GET /products/my-products Get current user's products Yes
API Documentation
Interactive API documentation is available at:

Swagger UI: http://localhost:3000/api/docs

Authentication Flow
Register a new user:

bash
curl -X POST http://localhost:3000/auth/register \
 -H "Content-Type: application/json" \
 -d '{
"name": "John Doe",
"email": "john@example.com",
"password": "password123"
}'
Login:

bash
curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{
"email": "john@example.com",
"password": "password123"
}'
Use the token in subsequent requests:

bash
curl http://localhost:3000/users/profile \
 -H "Authorization: Bearer YOUR_JWT_TOKEN"
User Roles
USER: Can create and manage their own products

ADMIN: Full access to all resources, including user management

🧪 Testing
Run Tests
bash

# Run all tests

npm test

# Run tests in watch mode

npm run test:watch

# Run tests with coverage report

npm run test:cov

# Run specific test file

npm test -- auth.service.spec.ts
Test Coverage
The project includes unit tests for:

Authentication service

User service

Product service

Guards and strategies

🐳 Docker Commands
Development
bash

# Start all services in development mode

docker-compose up

# Start in detached mode

docker-compose up -d

# View logs

docker-compose logs -f

# Stop services

docker-compose down

# Stop services and remove volumes

docker-compose down -v
Production Build
bash

# Build production image

docker build -t riwi-backend:prod --target production .

# Run production container

docker run -p 3000:3000 --env-file .env riwi-backend:prod
📁 Project Structure
