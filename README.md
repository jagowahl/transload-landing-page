# Transload Landing Page

A modern, responsive landing page for Transload - an intelligent forklift control system that optimizes forklift routes and streamlines cross docking warehouse operations through AI-powered optimization solutions.

## 🚀 About the Project

Transload is an innovative startup focused on revolutionizing warehouse efficiency through intelligent route optimization for forklifts. This landing page showcases:

- **Smart Route Optimization**: AI-powered algorithms that reduce empty runs and optimize warehouse traffic flow
- **Seamless Integration**: Plug-and-play solution that adapts to existing warehouse infrastructure
- **Real-time Analytics**: Comprehensive dashboard for monitoring warehouse performance and KPIs
- **Intuitive Navigation**: Turn-by-turn guidance for forklift operators via existing scanner systems

The landing page features bilingual support (English/German) and highlights the company's core value proposition through interactive sections including features, team, and contact information.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 22.x or higher)
- **npm** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [repository-url]
cd transload-landing-page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── Features.tsx    # Product features
│   │   ├── HowItWorks.tsx  # Process explanation
│   │   ├── Team.tsx        # Team section
│   │   ├── GetInTouch.tsx  # Contact form
│   │   └── ...
│   ├── impressum/          # Legal pages
│   ├── privacy-policy/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/ui/          # Reusable UI components
├── lib/                   # Utility functions
├── public/               # Static assets
└── ...
```

## 🌐 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: English and German language options
- **Interactive Animations**: Smooth transitions and hover effects using Framer Motion
- **Modern UI**: Clean, professional design with dark theme
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

⚠️ **The main branch is protected** and only accepts reviewed pull requests.

### Contribution Workflow:

1. **Fork the repository**
2. **Create a feature branch** from `main`:
   ```bash
   git switch -c feature/your-feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** against the `main` branch
6. **Wait for code review** - All PRs require approval before merging

### Code Standards

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper TypeScript types
- Test your changes thoroughly

## 📝 Environment Variables

This project doesn't require environment variables for basic functionality. If you need to add environment variables for additional features:

1. Create a `.env.local` file in the root directory
2. Add your variables following Next.js conventions
3. Update `.env.example` with non-sensitive examples

## 🚀 Deployment

The project is configured for easy deployment on [Vercel](https://vercel.com/) (recommended for Next.js)

Vercel will automatically detect changes an main an triggers a new deployment

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

For questions about the codebase or contribution process, please reach out through the contact form on the website or create an issue in this repository.

---

Built with ❤️ by the transload team
