import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Ghost-like Blog
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/tags" className="text-sm font-medium transition-colors hover:text-primary">
            Tags
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="ghost" className="hidden md:flex">
            <Link href="/subscribe">Subscribe</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
