# My Portfolio Website

This is a responsive portfolio website built with React, Vite, and Shadcn UI. It showcases my projects, skills, and experience in a clean and modern design. The website is designed to be easily customizable and extensible.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/en/main)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18.x or later)
- [pnpm](https://pnpm.io/) (optional, but recommended)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TemiKayode/TemiPortfolio.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Run the development server
   ```sh
   pnpm run dev
   ```

This will start the development server at `http://localhost:5173`.

### Building for Production

To create a production build, run:

```sh
pnpm run build
```

This will create a `dist` folder with the optimized production build.

## Scripts

- `dev`: Starts the development server.
- `build`: Creates a production build.
- `lint`: Lints the code using ESLint.
- `preview`: Serves the production build locally for preview.

## Project Structure

The project is structured as follows:

```
src
├── assets
├── components
│   ├── ui
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── pages
│   ├── Home.tsx
│   └── NotFound.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
