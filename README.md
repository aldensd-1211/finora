# 🌅 Finora — Full Stack AI-Powered Finance Platform

A blazing-fast finance platform powered by Next.js, Supabase, Prisma, and Inngest — complete with authentication, transaction tracking, budgets, analytics, and AI insights.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🧾 Overview

**Finora** helps users manage personal finances by logging transactions, setting budgets, and gaining AI-driven spending insights. It uses background job automation, rate limiting, and AI tools to deliver a seamless financial dashboard experience.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 14, Shadcn UI, Tailwind CSS
- **Backend**: Supabase (DB & Auth), Prisma ORM, Inngest (background jobs)
- **Security & Infra**: ArcJet (rate limiting, bot protection)
- **AI**: OpenAI / Gemini API (for insights and receipt scanning)
- **Deployment**: Vercel

---

## 🛠️ Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Supabase Account](https://supabase.com/)
- [OpenAI or Gemini API Key](https://platform.openai.com/)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/aldensd-1211/finora.git
cd finora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root and add the following:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

---

## 📂 Project Structure

```
finora/
│
├── app/              # App routes (Next.js 14)
├── components/       # UI components (Shadcn)
├── lib/              # DB & API utils
├── prisma/           # Prisma schema
├── public/           # Static assets
└── .env              # Your local environment vars
```

---

## ▶️ Usage

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub for review.

> 📌 Always work on a branch. Do **not** commit directly to `main`.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE)
