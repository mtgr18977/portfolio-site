import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllPosts, getPostsByTag } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export async function generateStaticParams() {
  const posts = getAllPosts()
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))
  return tags.map((tag) => ({
    tag,
  }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Posts tagged with <span className="text-primary">{tag}</span>
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mb-2 flex items-center gap-2">
              {post.tags.slice(0, 2).map((t) => (
                <Link
                  key={t}
                  href={`/tags/${t}`}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    t === tag ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {t}
                </Link>
              ))}
              <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
            </div>
            <Link href={`/posts/${post.slug}`}>
              <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:underline">{post.title}</h3>
            </Link>
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="flex items-center gap-2">
              <Image
                src={post.author.picture || "/placeholder.svg"}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-xs">{post.author.name}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
