# Marvel Frontend Challenge
This project is a responsive web application that consumes the Marvel API to display a list of Marvel characters with pagination, filtering, and detailed character information. It also includes a chart that visualizes the number of comics per character on each page.

### Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Security Considerations](#security-considerations)
- [Demo](#demo)
- [License](#license)
- [Contact](#contact)

## Technologies Used
- React 18: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
- Vite: Fast build tool and development server.
- React Query: Data-fetching and state management library.
- Tailwind CSS: Utility-first CSS framework for styling.
- Axios: Promise-based HTTP client for making API requests.
- clsx: Utility for constructing className strings conditionally.
- Class Variance Authority (CVA): Library for creating utility-based component variants.
- Vitest: A fast unit test framework.
- Nivo Circle Packing: For data visualization of the number of comics per character.
## Features
- Character Listing: Displays a list of Marvel characters with pagination.
- Character Details: View detailed information about a character, including name, description, comics, and movies/series.
- Filtering: Filter characters by name or selection.
- Pagination: Navigate through the list of characters with manual page controls.
- Comics Chart: Visual representation of the number of comics per character on the current page.
- Responsive Design: Optimized for various screen sizes.
- Best Practices: Secure API consumption and optimized performance.
## Installation
Clone the repository:

```bash
git clone https://github.com/gabrielrochas/marvel-app.git
cd marvel-app
```
Install dependencies:

```bash
pnpm install
```
Create a .env file in the root of the project and add your Marvel API credentials:

```env
VITE_MARVEL_PUBLIC_KEY=your_public_key
VITE_MARVEL_PRIVATE_KEY=your_private_key
```

Start the development server:

```bash
npm run dev
```
### Running with pnpm
If you prefer to use pnpm instead of npm, follow these steps:

Ensure pnpm is installed globally:

```bash
npm install -g pnpm
```
Install dependencies with pnpm:

```bash
pnpm install
```
Start the development server:

```bash
pnpm run dev
```
## Usage
1. Open your browser and navigate to http://localhost:5173.
2. Explore the list of Marvel characters.
3. Use the pagination controls to navigate through the pages.
4. Filter characters by name using the search bar.
5. Click on a character to view detailed information.
6. View the comics chart on each page to see the number of comics per character.
## Project Structure
```bash
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components
├── hooks/          # Custom hooks for data fetching and state management
├── models/         # TypeScript interfaces and types
├── pages/          # Page components for different routes
├── services/       # API service functions
├── styles/         # Global styles and Tailwind configuration
├── viewmodels/     # ViewModel layer for MVVM architecture
└── views/          # React components that consume ViewModel data
```
## API Integration
This application interacts with the [Marvel API](https://developer.marvel.com/). The API is used to fetch character data, including details like names, descriptions, comics, and series.

To secure API keys, sensitive information is stored in environment variables and handled securely.

## Security Considerations
- Environment Variables: API keys are stored in environment variables and never hardcoded.
- Rate Limiting: Considered when making API requests to avoid hitting limits.
- Input Validation: User inputs are validated and sanitized before making API requests.
## Demo
A live demo of the project can be accessed [here](https://kanastra-challenge-plum.vercel.app/).

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/gabrielrochas/marvel-app?tab=MIT-1-ov-file) file for details.

## Contact
- [GitHub](https://github.com/gabrielrochas)
- [Twitter](https://twitter.com/gabrielrochas)
- [LinkedIn](https://www.linkedin.com/in/gabrielrochas/)
