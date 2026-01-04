import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Mail, MapPin } from 'lucide-react'

export default function PortfolioHero04() {
  return (
    <section className="min-h-[80vh] flex items-center py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="size-32 md:size-40 ring-4 ring-background shadow-xl">
                <AvatarImage src="" />
                <AvatarFallback className="text-4xl bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 size-8 bg-green-500 rounded-full border-4 border-background" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <Badge variant="secondary" className="mb-4">
                Open to Work
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hi, I'm John Doe 👋</h1>

              {/* Info Items */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="size-4" />
                  hello@johndoe.com
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  Available from Jan 2025
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">A passionate Full-Stack Developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.</p>


              {/* Tech Stack
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div> */}

              {/* CTA */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button size="lg" className="gap-2">
                  View Portfolio
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
