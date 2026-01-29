# Luis Prieto - DevOps Engineer Portfolio

A modern, production-ready portfolio website built with React, Vite, and Tailwind CSS. Features dark/light mode toggle, English/Spanish language support, and automatic deployment to GitHub Pages.

## Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript + Tailwind CSS
- **Dark/Light Mode**: Smooth animated theme switching with localStorage persistence (dark mode by default)
- **Bilingual Support**: English and Spanish with language toggle and localStorage persistence
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Custom Design**: Professional, minimalist layout tailored for DevOps engineers
- **CI/CD Pipeline**: Automated deployment to GitHub Pages using GitHub Actions
- **Production Ready**: Optimized build, clean code, and comprehensive documentation

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── vite.svg                # Favicon
├── src/
│   ├── components/
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact section
│   │   ├── Experience.tsx      # Experience timeline
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── LanguageToggle.tsx  # Language switcher
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills & technologies
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── contexts/
│   │   └── LanguageContext.tsx # Language context provider
│   ├── hooks/
│   │   └── useTheme.ts         # Theme management hook
│   ├── i18n/
│   │   ├── en.json             # English translations
│   │   └── es.json             # Spanish translations
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles
│   ├── main.tsx                # App entry point
│   └── vite-env.d.ts           # Vite type definitions
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Personal Information

1. **Translation Files**: Edit content in `src/i18n/en.json` and `src/i18n/es.json`
   - Update name, title, descriptions
   - Modify experience, projects, and skills
   - Change contact information

2. **Contact Links**: Update in `src/components/Contact.tsx`
   - Email address
   - GitHub profile
   - LinkedIn profile

3. **Project Links**: Update in translation files under `projects.items[].link`

### Styling & Branding

1. **Colors**: Customize in `tailwind.config.js`
```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Light mode primary color
    dark: '#60a5fa',    // Dark mode primary color
  },
  // ... more colors
}
```

2. **Fonts**: Change in `src/index.css`

3. **Animations**: Modify in `tailwind.config.js` under `theme.extend.animation`

### Base Path Configuration

The site is configured for deployment to `https://yourusername.github.io/portfolio/`

To change the base path:

1. Edit `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',  // Change this
  // ...
})
```

2. For a custom domain or root path, use:
```typescript
base: '/',
```

## Deployment

### GitHub Pages Setup

1. Create a new repository on GitHub named `portfolio` (or your preferred name)

2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

4. The workflow will automatically run on every push to `main` branch

5. Your site will be available at: `https://yourusername.github.io/portfolio/`

### GitHub Actions Workflow

The deployment pipeline (`.github/workflows/deploy.yml`) automatically:

1. **Triggers** on push to `main` branch or manual workflow dispatch
2. **Installs** dependencies using npm ci
3. **Builds** the project with `npm run build`
4. **Deploys** to GitHub Pages

The workflow uses the latest GitHub Actions:
- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

### Manual Deployment

To manually trigger deployment:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow"

## Technology Stack

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Actions**: CI/CD automation
- **GitHub Pages**: Free static site hosting

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Optimized bundle size with code splitting
- Lazy loading for images and components

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## License

This project is open source and available under the MIT License.

## Contact

Luis Fernando Prieto Romero - [lfprietoromero@gmail.com](mailto:lfprietoromero@gmail.com)

Portfolio: [https://lfprietoromero.github.io/portfolio/](https://lfprietoromero.github.io/portfolio/)

---

Built with ❤️ using React, Vite, and Tailwind CSS
