import { Card, CardContent } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface DocumentationItemProps {
  title: string
  description: string
  url: string
}

export default function DocumentationItem({ title, description, url }: DocumentationItemProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3 mt-1">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
            <Link
              href={url}
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Documentação <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
