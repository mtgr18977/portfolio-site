import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              A beautiful blog system built with Next.js that reads Markdown files from a folder.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-muted-foreground hover:text-foreground">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="mt-4 text-sm text-muted-foreground">Stay updated with the latest posts.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-r-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ghost-like Blog. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
