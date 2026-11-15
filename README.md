# Bird Atlas

A modern bird field guide and species discovery experience, built with React and TypeScript.

Bird Atlas aims to make bird exploration intuitive through an accessible, responsive interface for discovering species and learning about their characteristics.

> Currently under active development.

## Project Status

The repository currently contains the React application scaffold, development tooling, and initial project configuration. Bird-specific application features are planned and will be implemented incrementally.

## Product Vision

Bird Atlas is being designed as a digital field guide that makes bird species information easy to explore and understand.

### Planned Features

- **Bird Catalogue** — Browse a structured collection of bird species.
- **Species Profiles** — Explore detailed information about individual birds.
- **Search** — Find species by name and relevant attributes.
- **Category Filtering** — Narrow down species by selected characteristics.
- **Responsive Interface** — Provide an accessible experience across desktop and mobile devices.

These features represent the planned product scope and are not yet implemented.

## Technology Stack

| Technology   | Purpose                              |
| ------------ | ------------------------------------ |
| React        | Component-based UI                   |
| TypeScript   | Static type checking                 |
| Vite         | Development server and build tooling |
| React Router | Client-side routing                  |
| Lucide React | Icon library                         |
| Oxlint       | Code quality and linting             |
| Prettier     | Code formatting                      |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/shuvakant6623/bird-atlas.git
cd bird-atlas
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Available Scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start development server               |
| `npm run build`        | Type-check and build production assets |
| `npm run preview`      | Preview production build               |
| `npm run lint`         | Run Oxlint                             |
| `npm run format`       | Format project files                   |
| `npm run format:check` | Check formatting consistency           |

## Project Structure

Current repository structure:

```text
bird-atlas/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

The application structure will evolve as reusable components and feature modules are introduced.

## Development Workflow

The project follows a small, incremental development workflow:

1. Understand the feature requirements.
2. Implement one logical unit of work.
3. Validate application behavior.
4. Run linting and formatting checks.
5. Verify the production build.
6. Commit changes using Conventional Commits.

## Roadmap

- [x] Initialize React and TypeScript project.
- [x] Configure Oxlint and Prettier.
- [ ] Establish the design-token system.
- [ ] Implement the responsive application shell.
- [ ] Build the bird catalogue interface.
- [ ] Implement species profiles.
- [ ] Add search and filtering.
- [ ] Add automated tests.
- [ ] Establish continuous integration.

---

**Bird Atlas** — Explore the diversity of birds.
