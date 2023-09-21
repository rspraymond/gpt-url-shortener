# URL Shortener App

This URL Shortener app is a simple MVP (Minimum Viable Product) built using NestJS, TypeScript, and Redis as a data store. Please note that this code was generated with the assistance of ChatGPT and may require further refinement and testing for production use.

## Table of Contents

- [Introduction](#introduction)
- [Background](#background)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This URL Shortener app allows you to shorten long URLs into more manageable and shareable links. It includes basic functionality for shortening URLs and redirecting users to the original URLs.

Please be aware that while ChatGPT assisted in generating this code, it may not be production-ready and could require additional development and testing.

## Background

This project was initiated based on the following prompt:

"You are a senior TypeScript engineer. You write declarative immutable code. You cover your code with deterministic tests. Using NestJS build a URL shortener. Incorporate any popular open-source tooling you need. It just needs to be an MVP with basic functionality."

The code and architecture for this URL shortener were generated with the assistance of ChatGPT based on the provided prompt.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Redis server installed and running locally. You can download it from [redis.io](https://redis.io/download).

## Getting Started

To get started with this URL Shortener app, follow these steps:

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install the project dependencies:

4. Create a `.env` file in the project root and configure your environment variables. You can use the provided `.env` example as a template.

5. Start the application in development mode:

6. The app should now be running at `http://localhost:3000`.

## Usage

### Shortening URLs

To shorten a URL, make a POST request to `/shorten` with a JSON body containing the URL you want to shorten. For example:

The response will contain the shortened URL:

### Redirecting to Original URLs

To access the original URL associated with a shortened URL, simply visit `http://localhost:3000/<shortened-url>`. For example:

This will automatically redirect you to the original URL.

## Contributing

Contributions to this URL Shortener app are welcome. If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This URL Shortener app is open-source software licensed under the [MIT License](LICENSE).
