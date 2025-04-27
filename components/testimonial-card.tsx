import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  image: string
}

export default function TestimonialCard({ quote, author, title, image }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <p className="mb-4 text-center text-muted-foreground">"{quote}"</p>
        <div className="flex items-center justify-center gap-4">
          <Image src={image || "/placeholder.svg"} width={50} height={50} alt={author} className="rounded-full" />
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
