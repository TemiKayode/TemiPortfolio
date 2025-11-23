# Temi Kayode - Portfolio Website

> **A 3D Linux Terminal-Themed Portfolio** showcasing Full Stack Development expertise with React, Node.js, and modern web technologies.

![Portfolio Theme](https://img.shields.io/badge/Theme-Linux%20Terminal-green) ![React](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

A stunning, interactive portfolio website featuring a **3D Linux terminal aesthetic** with monospace fonts, green-on-black color scheme, terminal windows, command prompts, and immersive 3D transforms. This portfolio showcases projects, skills, and professional experience with a unique terminal-style design.

## 🌟 Features

- **3D Linux Terminal Theme**: Complete terminal aesthetic with monospace fonts, green-on-black colors, and terminal windows
- **Interactive 3D Effects**: CSS perspective transforms and hover animations throughout
- **Terminal Command Prompts**: Realistic terminal prompts (`temi@portfolio:~/$`) in all sections
- **ASCII Art**: Terminal-style branding and visual elements
- **Enhanced Project Display**: Large project images with terminal borders and glow effects
- **First Letter Icons**: Projects without logos display stylized first letters
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme Optimized**: Terminal-themed dark mode by default
- **Contact Form**: Integrated EmailJS contact form
- **Smooth Animations**: Terminal-style animations and transitions

## 🚀 Technologies Used

### Core Framework
- **[React 18.3](https://react.dev/)** - UI Library
- **[TypeScript 5.5](https://www.typescriptlang.org/)** - Type Safety
- **[Vite 5.4](https://vitejs.dev/)** - Build Tool & Dev Server

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn UI](https://ui.shadcn.com/)** - High-quality component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Features & Libraries
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Typewriter Effect](https://github.com/tameemsafi/typewriterjs)** - Terminal typing animations
- **[EmailJS](https://www.emailjs.com/)** - Contact form email service
- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[Zod](https://zod.dev/)** - Schema validation
- **[TanStack Query](https://tanstack.com/query)** - Data fetching

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18.x or later)
- npm or pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TemiKayode/TemiPortfolio.git
   cd TemiPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
TemiPortfolio/
├── public/
│   ├── favicon.svg          # Terminal-themed favicon
│   ├── images/              # Static images (profile, CV, etc.)
│   └── robots.txt
├── src/
│   ├── assets/              # Logo files and project assets
│   │   ├── logoo.png        # Orda Delivery logo
│   │   └── pheran-logo.png
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Experience.tsx   # Professional experience
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with terminal
│   │   └── Projects.tsx     # Projects showcase
│   ├── lib/
│   │   ├── email-service.ts # EmailJS integration
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Main page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles & terminal theme
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Features

### Terminal Theme
- **Color Scheme**: Green (#00ff41) on black background
- **Typography**: Monospace fonts (Courier New, Fira Code, Consolas)
- **Effects**: Terminal window borders, glow effects, blinking cursor
- **3D Transforms**: CSS perspective and 3D transforms throughout

### Components
- **Hero Section**: Terminal window with command prompts and ASCII art
- **Projects**: Enhanced project cards with large images and terminal styling
- **Experience**: Timeline with terminal aesthetic
- **Contact**: Terminal-styled contact form
- **Navigation**: Command-prompt style links (`$ ./about`)

## 📝 Projects Featured

- **OrdaDelivery** - Local food delivery platform (TypeScript, React, Node.js)
- **Pheran Clothing** - E-commerce fashion store (Next.js, PostgreSQL)
- **Turbo Software** - Full-stack SaaS platform (React, TypeScript, Supabase, Stripe)
- **Turbo Chat** - Real-time chat platform (Go, Rust, Next.js, Docker/K8s)
- **WumiKay Ventures** - Order management system (React, TypeScript, Supabase)
- **Wallet Discovery** - Crypto wallet toolkit (Python, Blockchain, Web3)
- And more...

## 🔧 Configuration

### Email Service (EmailJS)

Update the EmailJS configuration in `src/lib/email-service.ts`:

```typescript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';
```

Make sure your EmailJS template is configured to send emails to `temitayokayode5@gmail.com`.

### Environment Variables

Create a `.env` file for any environment-specific variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

## 📧 Contact

- **Email**: temitayokayode5@gmail.com
- **GitHub**: [@TemiKayode](https://github.com/TemiKayode)
- **LinkedIn**: [temitayo-kayode](https://www.linkedin.com/in/temitayo-kayode/)
- **Portfolio**: [View Live](https://temikayode.dev) *(Update with your deployment URL)*

## 🎯 Key Features

### Terminal Aesthetic
- ✅ Monospace fonts throughout
- ✅ Green-on-black color scheme
- ✅ Terminal window components
- ✅ Command prompt styling
- ✅ Blinking cursor animations
- ✅ ASCII art elements

### 3D Effects
- ✅ CSS perspective transforms
- ✅ 3D hover effects
- ✅ Floating terminal windows
- ✅ Depth-based animations
- ✅ Transform-style preserve-3d

### User Experience
- ✅ Smooth scrolling
- ✅ Responsive design
- ✅ Fast load times
- ✅ Accessible components
- ✅ SEO optimized

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the excellent component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- Linux terminal aesthetic inspiration

---

**Built with ❤️ by Temi Kayode**

*Full Stack Developer & Product Owner*
