---
title: "Getting Started with Next.js"
date: "2023-04-18"
coverImage: "/placeholder.svg?height=600&width=1200"
excerpt: "Learn how to build modern web applications with Next.js, the React framework for production."
tags: ["nextjs", "react", "tutorial"]
author:
  name: "Jane Doe"
  picture: "/placeholder.svg?height=100&width=100"
  bio: "Full-stack developer and technical writer passionate about React and Next.js."
---

# Getting Started with Next.js

Next.js is a React framework that enables you to build supercharged, server-rendered React applications with ease. It's designed to make the developer experience as pleasant as possible, with features like:

- Server-side rendering
- Static site generation
- API routes
- File-system based routing
- Built-in CSS and Sass support
- Fast refresh
- TypeScript support
- Image optimization

## Installation

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will create a new Next.js app in the `my-app` directory and start the development server on http://localhost:3000.

## File-System Based Routing

Next.js has a file-system based router built on the concept of pages. When a file is added to the `pages` directory, it's automatically available as a route.

For example:

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/:slug`

## Data Fetching

Next.js provides several ways to fetch data for your pages:

### getStaticProps

\`\`\`jsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data },
  }
}
\`\`\`

### getStaticPaths

\`\`\`jsx
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}
\`\`\`

### getServerSideProps

\`\`\`jsx
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data },
  }
}
\`\`\`

## Conclusion

Next.js is a powerful framework that makes building React applications a breeze. With its built-in features and optimizations, it's a great choice for building modern web applications.
\`\`\`

Let's create another sample post:
