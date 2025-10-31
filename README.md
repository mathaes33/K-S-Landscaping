# K&S Landscaping Website

This repository contains the source code for the Kyle and Sam's Landscaping company website. It's a modern, responsive, and performant single-page application (SPA) built with a buildless frontend stack, optimized for deployment on Netlify.

## ✨ Features

- **Services Showcase**: Detailed pages for all services offered, including galleries and process descriptions.
- **Dynamic FAQ**: A searchable and filterable FAQ section to answer common client questions.
- **Lead Capture**: Seamless lead generation through a Netlify-powered contact form.
- **Careers Page**: An application form for prospective employees, including resume uploads.
- **SEO Optimized**: Uses dynamic meta tags, structured data (`ld+json`), and a sitemap for improved search engine visibility.
- **Performant**: Leverages lazy loading for images and background assets to ensure fast load times.
- **Accessible**: Built with accessibility in mind, using semantic HTML and ARIA attributes.

## 🏗️ Architectural Analysis

This project is a prime example of a modern, "buildless" frontend architecture. It is production-ready, maintainable, and highly performant.

### Tech Stack

-   **Core**: **React (v19) with TypeScript**. This provides a type-safe, component-based foundation that is excellent for maintainability and scalability.
-   **Styling**: **Tailwind CSS (v3) via CDN**. This utility-first CSS framework allows for rapid UI development directly in the markup, without requiring a complex build pipeline for processing.
-   **Routing**: **React Router DOM (v7)** using `HashRouter`. This choice is pragmatic for static hosting, as it works out-of-the-box without server-side rewrite rules.
-   **Dependencies**: All external libraries are loaded via a CDN using an **`importmap`** in `index.html`. This is a modern browser feature that allows for native ES module resolution without a bundler.

### Project Structure

The codebase is well-organized, following established best practices:

-   **/components**: Contains reusable UI components (`Button`, `Input`, `LazyBackground`) used across the application.
-   **/pages**: Each top-level route has its own component, representing a "page."
-   **/hooks**: Custom React hooks (`useMetaTags`, `useFormValidator`) are centralized here, abstracting complex logic away from components.
-   **constants.tsx**: A single source of truth for static data like service details, navigation links, and contact information.
-   **types.ts**: Centralized TypeScript type definitions ensure consistency throughout the project.

### Build Process & Deployability

-   **Buildless Approach**: A key feature is the complete absence of a build step (no Webpack, Vite, etc.). The browser loads and interprets the code directly. This simplifies the development workflow significantly.
-   **Deployment**: The site is highly deployable and has been optimized for **Netlify**. It includes a `netlify.toml` file with configurations for redirects and security headers. Netlify Forms are pre-configured in the markup (`data-netlify="true"`) for zero-config-needed form handling.

## 🚀 Running Locally

Since there's no build process, you can run this project using any simple static file server.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <repo-folder>
    ```

2.  **Serve the files:**
    If you have Node.js, you can use the `serve` package:
    ```bash
    npx serve .
    ```
    Alternatively, you can use a browser extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code.

## ☁️ Deployment to Netlify

This site is optimized for one-click deployment on Netlify.

### Step-by-Step Guide

1.  **Push to a Git Provider**: Push your project code to a GitHub, GitLab, or Bitbucket repository.
2.  **Create a New Site on Netlify**: Log in to your Netlify account and click "Add new site" -> "Import an existing project".
3.  **Connect Your Repository**: Choose the Git provider and select your project's repository.
4.  **Configure Build Settings**: Netlify will read the `netlify.toml` file. The settings will be automatically configured.
    - **Build command**: (will default to `echo 'No build step required'`)
    - **Publish directory**: (will default to `/`)
5.  **Deploy**: Click "Deploy site". Netlify will deploy your static files and apply all configurations.

### Netlify Forms

This project's forms are ready for Netlify's form handling feature.

- **Contact Form**: Located in `components/LeadCaptureForm.tsx`. It's named `contact`.
- **Application Form**: Located in `components/ApplicationForm.tsx`. It's named `application` and supports file uploads.

When you deploy to Netlify, the `data-netlify="true"` attribute in the `<form>` tags will be detected automatically. Form submissions will appear in your Netlify site dashboard under the "Forms" section. No extra configuration is needed.