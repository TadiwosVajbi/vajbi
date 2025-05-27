export default async function DocsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Developer Documentation</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#project-overview" className="text-blue-600 hover:underline">
                  Project Overview
                </a>
              </li>
              <li>
                <a href="#project-structure" className="text-blue-600 hover:underline">
                  Project Structure
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-blue-600 hover:underline">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-blue-600 hover:underline">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#i18n-implementation" className="text-blue-600 hover:underline">
                  i18n Implementation
                </a>
              </li>
              <li>
                <a href="#development" className="text-blue-600 hover:underline">
                  Development Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <section id="project-overview" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-4">
              This is a modern website built with Next.js 15, TypeScript, and Tailwind CSS 4. It uses the Next.js App Router architecture and includes internationalization support for English and Swedish.
            </p>
          </section>

          <section id="project-structure" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
            <p className="text-gray-700 mb-4">
              The project follows a modular structure to keep the codebase organized and maintainable:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg overflow-auto">
              <pre className="text-sm font-mono">
{`website/
├── public/                  # Static assets
│   └── locales/             # Legacy i18n files (not used with App Router)
│       ├── en/
│       └── sv/
├── src/
│   ├── app/                 # App Router directory
│   │   ├── [lang]/          # Dynamic route for language
│   │   │   ├── layout.tsx   # Layout for language routes
│   │   │   ├── page.tsx     # Home page
│   │   │   └── docs/        # Documentation page
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
└── tailwind.config.ts       # Tailwind CSS configuration`}
              </pre>
            </div>
          </section>

          <section id="technologies" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Technology</th>
                    <th className="py-2 px-4 border-b text-left">Version</th>
                    <th className="py-2 px-4 border-b text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Next.js</td>
                    <td className="py-2 px-4 border-b">15.3.1</td>
                    <td className="py-2 px-4 border-b">React framework with App Router</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">React</td>
                    <td className="py-2 px-4 border-b">19.0.0</td>
                    <td className="py-2 px-4 border-b">UI library</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">TypeScript</td>
                    <td className="py-2 px-4 border-b">5.x</td>
                    <td className="py-2 px-4 border-b">Type safety</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Tailwind CSS</td>
                    <td className="py-2 px-4 border-b">4.x</td>
                    <td className="py-2 px-4 border-b">Utility-first CSS</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">ESLint</td>
                    <td className="py-2 px-4 border-b">9.x</td>
                    <td className="py-2 px-4 border-b">Code linting</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Prettier</td>
                    <td className="py-2 px-4 border-b">Latest</td>
                    <td className="py-2 px-4 border-b">Code formatting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="architecture" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
            <p className="text-gray-700 mb-4">
              This project uses the Next.js App Router architecture, which is a file-system based router built on top of Server Components.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Architectural Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>App Router:</strong> Routes are defined by the file system under <code className="bg-gray-200 px-2 py-1 rounded">src/app</code></li>
              <li><strong>Server Components:</strong> Most components are server components by default</li>
              <li><strong>Client Components:</strong> Components that need client-side interactivity are marked with 'use client' directive</li>
              <li><strong>Dynamic Routes:</strong> The <code className="bg-gray-200 px-2 py-1 rounded">[lang]</code> directory represents a dynamic route segment for language</li>
              <li><strong>Middleware:</strong> Used for language detection and redirection</li>
            </ul>
          </section>

          <section id="i18n-implementation" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">i18n Implementation</h2>
            <p className="text-gray-700 mb-4">
              Internationalization is implemented using Next.js App Router&apos;s built-in features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Language Detection:</strong> Middleware detects the user&apos;s preferred language</li>
              <li><strong>Dictionary Loading:</strong> <code className="bg-gray-200 px-2 py-1 rounded">getDictionary()</code> function loads translations based on the language</li>
              <li><strong>Translation Files:</strong> JSON files in <code className="bg-gray-200 px-2 py-1 rounded">src/app/dictionaries/</code> contain translations</li>
              <li><strong>Language Switching:</strong> Header component allows users to switch languages</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Dictionary Structure Example:</h4>
              <pre className="text-sm font-mono">
{`// src/app/dictionaries/en.json
{
  &quot;welcome&quot;: &quot;Welcome to our website&quot;,
  &quot;description&quot;: &quot;A modern website built with Next.js, TypeScript, and Tailwind CSS&quot;,
  &quot;getStarted&quot;: &quot;Get Started&quot;,
  &quot;learnMore&quot;: &quot;Learn More&quot;
}`}
              </pre>
            </div>
          </section>

          <section id="development" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Development Guide</h2>
            <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono">
{`# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-6">Adding a New Page</h3>
            <p className="text-gray-700 mb-4">
              To add a new page, create a new file in the <code className="bg-gray-200 px-2 py-1 rounded">src/app/[lang]/</code> directory:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-sm font-mono">
{`// src/app/[lang]/about/page.tsx
import { getDictionary } from "../../dictionaries";

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      {/* Page content */}
    </div>
  );
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-6">Adding New Translations</h3>
            <p className="text-gray-700 mb-4">
              To add new translations, update the JSON files in the <code className="bg-gray-200 px-2 py-1 rounded">src/app/dictionaries/</code> directory.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
