# RBK - Web & App Development Company

Professional website for RBK - providing web development, mobile apps (iOS/Android), automation solutions (N8N, Make.com), and Python development services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Translation**: Google Translate integration
- **Deployment**: Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Contact Form
WEB3FORMS_ACCESS_KEY=your_web3forms_key_here

# Telegram Integration (Optional)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rbk/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/
│   ├── site-config.ts    # Main content configuration ⭐
│   └── utils.ts          # Utility functions
├── public/               # Static assets (images, logos)
└── tailwind.config.ts    # Tailwind & brand colors

```

## Customization

### Update Company Information

Edit `/lib/site-config.ts` - this file contains all website content:
- Company details
- Services information
- Contact information
- Page content

### Update Brand Colors

Edit `tailwind.config.ts` to change the color scheme.

### Update Logo

Replace files in `/public/brand/` with your logo.

## Features

- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Contact form with validation
- ✅ Telegram notifications
- ✅ Multi-language support (EN/LV/RU)
- ✅ Modern UI components
- ✅ Type-safe with TypeScript

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Your website will be live at `https://your-project.vercel.app`

## License

Private - All rights reserved

---

Built with ❤️ using Next.js

