import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-8 text-2xl font-medium">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
      >
        Go back home
      </Link>
    </div>
  )
}
