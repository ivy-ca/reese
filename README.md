# Reese Shu Portfolio Clone

This is a project that recreates Reese Shu's portfolio using a modern web stack.

## Tech Stack

- **Next.js** — React framework providing SSR, SSG, and App Router
- **Tailwind CSS** — Utility-first CSS framework
- **TypeScript** — Type-safe JavaScript
- **Redux Toolkit** — State management
- **Goober** — Lightweight CSS-in-JS library
- **PWA** — Progressive Web App
- **Google Tag Manager** — Tag management
- **Google Analytics** — Web analytics
- **HSTS** — HTTP Strict Transport Security
- **Vercel** — Deployment platform

## Features

- ✅ Responsive design
- ✅ Dark/Light theme toggle
- ✅ Smooth scroll navigation
- ✅ Animations
- ✅ PWA support
- ✅ SEO optimization
- ✅ Security headers
- ✅ Forced HTTPS redirects
- ✅ Performance optimizations
- ✅ Accessibility-minded

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy `env.example` to `.env.local` and fill in your settings:

```bash
cp env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FLOODLIGHT_ID=XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORCE_HTTPS=true
```

**Important**: `NEXT_PUBLIC_SITE_URL` must use HTTPS; it is used for HTTPS redirection.

### Development mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About me
│   ├── Experience.tsx   # Work experience
│   ├── Work.tsx         # Projects
│   ├── Contact.tsx      # Contact
│   ├── Footer.tsx       # Footer
│   ├── Providers.tsx    # Redux Provider
│   ├── ThemeWrapper.tsx # Theme wrapper
│   └── GTM.tsx          # Google Tag Manager
└── store/               # Redux store
    ├── store.ts         # Redux store
    └── slices/          # Redux slices
        ├── themeSlice.ts
        └── navigationSlice.ts
```

## Customization

### Edit content

Edit each component file to change content:

- `src/components/Hero.tsx` - home content
- `src/components/About.tsx` - about content
- `src/components/Experience.tsx` - work experience
- `src/components/Work.tsx` - portfolio projects

### Styling

- Edit `tailwind.config.ts` to customize theme
- Modify `src/app/globals.css` to add custom styles
- Use Goober to add dynamic styles in components

### Color theme

Modify `colors` in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // your primary color
  }
}
```

## Performance

- Use Next.js Image to optimize images
- Implement PWA caching strategies
- Use React.memo and useMemo to optimize rendering
- Implement virtualization (if needed)

## HTTPS Redirection

The project is configured to redirect all HTTP requests to HTTPS:

### Redirect mechanisms

1. **Next.js Middleware** (`src/middleware.ts`)
   - Checks `x-forwarded-proto` header
   - Automatically redirects HTTP requests to HTTPS
   - Uses 301 permanent redirect

2. **Next.js Config** (`next.config.js`)
   - Dynamic redirects based on environment variables
   - Supports custom domain

3. **Vercel Config** (`vercel.json`)
   - Platform-level redirect settings
   - Uses `$VERCEL_URL` variable

### Security headers

This project includes the following security headers:

- HSTS (HTTP Strict Transport Security)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Content-Security-Policy (upgrade-insecure-requests)

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Contributing

Contributions are welcome via Issues and Pull Requests!

## Contact

If you have questions, please reach out via GitHub Issues.