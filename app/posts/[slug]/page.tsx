import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, getPostContent } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
    }
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    const content = await getPostContent(post.content)
    const relatedPosts = getAllPosts()
      .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
      .slice(0, 3)

    return (
      <div className="container mx-auto px-4 py-10">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-muted/80"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.picture || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
            </div>
          </div>

          <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-lg dark:prose-invert mx-auto max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-16 border-t pt-8">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.picture || "/placeholder.svg"}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Related Posts</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <article key={post.slug} className="group">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:underline">{post.title}</h3>
                  </Link>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  } catch (error) {
    notFound()
  }
}
