# Vajbi - Modern Next.js Website

A modern website built with Next.js, TypeScript, and Tailwind CSS with internationalization support for English and Swedish.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Internationalization** (English and Swedish)
- **ESLint** and **Prettier** for code quality
- **Responsive Design**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
vajbi/
├── public/                  # Static assets
│   └── locales/             # Legacy i18n files (not used with App Router)
│       ├── en/
│       └── sv/
├── src/
│   ├── app/                 # App Router directory
│   │   ├── [lang]/          # Dynamic route for language
│   │   │   ├── layout.tsx   # Layout for language routes
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── about/       # About page
│   │   │   ├── services/    # Services page
│   │   │   ├── contact/     # Contact page
│   │   │   └── careers/     # Careers page
│   │   ├── dictionaries/    # i18n dictionaries
│   │   │   ├── en.json      # English translations
│   │   │   └── sv.json      # Swedish translations
│   │   ├── dictionaries.ts  # Dictionary loader
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Root page (redirects to /en)
│   └── components/          # Reusable components
│       ├── layout/          # Layout components
│       │   ├── Header.tsx   # Header component
│       │   └── Footer.tsx   # Footer component
│       ├── ui/              # UI components
│       │   └── Button.tsx   # Button component
│       └── SEO.tsx          # SEO component
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore file
├── eslint.config.mjs        # ESLint configuration
├── middleware.ts            # Next.js middleware (for i18n)
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
└── tailwind.config.ts       # Tailwind CSS configuration
```