import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function TagsPage() {
  const posts = getAllPosts()
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    .sort()
    .map((tag) => ({
      name: tag,
      count: posts.filter((post) => post.tags.includes(tag)).length,
    }))

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Tags</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tags.map((tag) => (
          <Link
            key={tag.name}
            href={`/tags/${tag.name}`}
            className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50"
          >
            <span className="font-medium">{tag.name}</span>
            <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
