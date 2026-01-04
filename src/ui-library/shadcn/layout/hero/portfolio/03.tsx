import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'

export default function PortfolioHero03() {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl rotate-45"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -rotate-12"></div>

      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left: Profile Image */}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 blur-2xl opacity-40 animate-pulse"></div>

              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60 opacity-20"></div>
                <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src=""
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="w-full h-full text-7xl sm:text-8xl rounded-none bg-gradient-to-br from-primary/20 to-primary/5">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 -left-4  px-4 py-1.5 bg-background/50 rounded-full border-2 border-primary/20 shadow-xl backdrop-blur-sm -rotate-35 animate-bounce">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-2 text-center lg:text-left">
            <div className="space-y-6">
              <Badge variant="outline" className="inline-flex px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5">
                Full-Stack Developer
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A passionate Full-Stack Developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.
              </p>
            </div>

            {/* Info Items */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MapPin className="size-4 text-primary" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="size-4 text-primary" />
                hello@johndoe.com
              </span>
              <span className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Calendar className="size-4 text-primary" />
                Available from Jan 2025
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="gap-2 px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                View Projects
                <ArrowRight className="size-4" />
              </Button>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-2 hover:border-primary hover:bg-primary/5 transition-all">
                  <Github className="size-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-2 hover:border-primary hover:bg-primary/5 transition-all">
                  <Linkedin className="size-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-2 hover:border-primary hover:bg-primary/5 transition-all">
                  <Twitter className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
