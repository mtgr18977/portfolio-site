import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type Post = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: string
  tags: string[]
  author: {
    name: string
    picture: string
    bio: string
  }
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"))
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage || "/placeholder.svg?height=600&width=1200",
    excerpt: data.excerpt || "",
    content,
    tags: data.tags || [],
    author: {
      name: data.author?.name || "Anonymous",
      picture: data.author?.picture || "/placeholder.svg?height=100&width=100",
      bio: data.author?.bio || "",
    },
  }
}

export async function getPostContent(content: string): Promise<string> {
  const result = await remark().use(html).process(content)
  return result.toString()
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}
