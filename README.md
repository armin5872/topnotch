# Topnotch

A modern Next.js frontend application featuring multiple landing pages and interactive components. Built with React 19, Tailwind CSS, and smooth animations for an excellent user experience.

## website link

- you can see the website here: [vercel deployment](https://topnotch-bay.vercel.app/)

## Features

- ✨ **Multiple Web Applications**: Topnotch Proto (core platform) and Corso React (course platform)
- 🎨 **Smooth Animations**: Powered by Framer Motion and GSAP
- 🎯 **Interactive Components**: Swiper carousels, modern forms, and responsive UI
- 📱 **Fully Responsive**: Mobile-first design with Tailwind CSS
- 🚀 **Next.js 16**: Latest generation framework with App Router
- 📝 **TypeScript**: Full type safety across the codebase
- 🔍 **Error Tracking**: Integrated Sentry for production monitoring
- 🐳 **Docker Ready**: Containerized deployment support
- 🧹 **Code Quality**: ESLint, Prettier, and Husky for pre-commit linting

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Emotion](https://emotion.sh/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [Lenis](https://lenis.studiofreight.com/)
- **Components**: [Swiper](https://swiperjs.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Monitoring**: [Sentry](https://sentry.io/)
- **Development**: TypeScript, ESLint, Prettier

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── SmoothScroll.tsx          # Smooth scrolling component
│   ├── topnotch-proto/          # Main Topnotch application
│   │   ├── Navbar.tsx
│   │   ├── footer.tsx
│   │   ├── sign-up/
│   │   ├── log-in/
│   │   ├── faq/
│   │   ├── programmers/
│   │   └── contact-us/
│   └── corso-react/             # Course platform application
│       ├── page.tsx
│       └── components/
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── Benefits.tsx
│           ├── Navbar.tsx
│           ├── Footer.tsx
│           ├── EventBanner.tsx
│           ├── Seminar.tsx
│           ├── Registration.tsx
│           ├── CourseSummary.tsx
│           ├── Partners.tsx
│           ├── Takeaways.tsx
│           └── Subscribe.tsx
```

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/armin5872/topnotch.git
   cd topnotch
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint and fix issues

## Docker Support

Build and run the application in a Docker container:

```bash
docker build -t topnotch .
docker run -p 3000:3000 topnotch
```

## Development Workflow

### Code Quality

This project uses automated tools to maintain code quality:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Husky** - Git pre-commit hooks

Pre-commit hooks automatically run linting and formatting on staged files.

### Environment Variables

Create a `.env.local` file in the root directory with any required environment variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Pages

- **Home** (`/`) - Main landing page
- **Topnotch Proto**
  - Sign Up (`/topnotch-proto/sign-up`)
  - Log In (`/topnotch-proto/log-in`)
  - FAQ (`/topnotch-proto/faq`)
  - Programmers (`/topnotch-proto/programmers`)
  - Contact Us (`/topnotch-proto/contact-us`)
- **Corso React** (`/corso-react`) - Course platform landing

## Performance & Monitoring

- **Sentry Integration**: Error tracking and performance monitoring enabled for production
- **Smooth Scrolling**: Implemented with Lenis for better UX
- **Optimized Animations**: Using GSAP and Framer Motion for performant animations

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Commit with a descriptive message
4. Push to your branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Repository**: [armin5872/topnotch](https://github.com/armin5872/topnotch)
