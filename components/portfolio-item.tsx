import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface LinkItem {
  url: string
  label: string
}

interface PortfolioItemProps {
  title: string
  description: string
  image: string
  tags: string[]
  links?: LinkItem[]
}

export default function PortfolioItem({ title, description, image, tags, links }: PortfolioItemProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground flex-1">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="mt-4 space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
