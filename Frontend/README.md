# PrepForge Frontend

A modern React frontend application built with Vite, featuring authentication and AI-powered functionality.

## Features

- User authentication (login/register)
- Protected routes
- Responsive design with SCSS
- API integration with Axios
- **AI-powered features using Google GenAI SDK**
- Modern React with hooks
- Fast development with Vite
- **ATS-friendly resume generation and download**

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: SCSS/Sass
- **HTTP Client**: Axios
- **Linting**: ESLint

## Project Structure

```
Frontend/
├── public/                # Static assets
├── src/
│   ├── main.jsx          # Application entry point
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   ├── style.scss        # SCSS variables and mixins
│   ├── app.routes.jsx    # Route configuration
│   ├── features/
│   │   ├── auth/         # Authentication feature
│   │   │   ├── auth.context.jsx     # Auth context provider
│   │   │   ├── auth.form.scss       # Auth form styles
│   │   │   ├── components/
│   │   │   │   └── Protected.jsx    # Route protection component
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.js       # Auth custom hook
│   │   │   ├── pages/
│   │   │   │   ├── Login.jsx        # Login page
│   │   │   │   └── register.jsx     # Registration page
│   │   │   └── services/
│   │   │       └── auth.api.js      # Auth API calls
│   │   └── ai/          # AI feature (placeholder)
│   └── style/
│       └── Button.scss  # Button component styles
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── index.html            # HTML template
```

## Installation

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Build the application for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## Available Routes

- `/login` - User login page
- `/register` - User registration page
- `/` - Protected home page (requires authentication)

## Environment Setup

The frontend communicates with the backend API. Make sure the backend is running on `http://localhost:3000` (configured in the backend's CORS settings).

## Dependencies

### Production
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router`: Client-side routing
- `axios`: HTTP client for API calls
- `sass`: CSS preprocessor
- `@google/genai`: Google GenAI SDK for AI features

### Development
- `@vitejs/plugin-react`: Vite React plugin
- `eslint`: Code linting
- `eslint-plugin-react-hooks`: React hooks linting
- `eslint-plugin-react-refresh`: React Fast Refresh linting
- `@types/react`: TypeScript types for React
- `@types/react-dom`: TypeScript types for React DOM
- `globals`: Global variables for ESLint
- `vite`: Build tool and dev server

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use SCSS modules for component-specific styles
- Keep components small and focused
- Use meaningful variable and function names

### File Organization
- Group related files in feature folders
- Use consistent naming conventions
- Separate concerns (components, hooks, services, styles)

### API Integration
- Use the `auth.api.js` service for authentication calls
- Handle errors appropriately
- Use the AuthContext for state management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test thoroughly
6. Submit a pull request

---

### Fetching the Latest Code

The repository houses both frontend and backend code. When cloning or pulling, you'll obtain the entire project structure:

```bash
# clone the repository (Frontend + Backend)
git clone https://github.com/HarshVardhan264/Full-gen-ai.git

# or update an existing clone:
cd Full-gen-ai
git pull origin main
```

Ensure you run the commands from the workspace root to access both directories.

