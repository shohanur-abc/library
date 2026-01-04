import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const PortfolioHero01 = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <Badge variant="outline" className="gap-2 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for hire
            </Badge>

            <div>
              <p className="text-xl text-muted-foreground mb-2">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                John Developer
              </h1>
              <p className="text-xl text-primary font-medium mt-2">
                Full-Stack Developer & UI Designer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I craft beautiful digital experiences with modern technologies. Passionate about clean code and pixel-perfect designs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 gap-2 group">
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button key={social.label} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="size-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-4 border-2 border-dashed border-primary/20 rounded-full animate-spin"
                style={{ animationDuration: '20s' }}
              />
              <div
                className="absolute inset-0 -m-8 border-2 border-dashed border-primary/10 rounded-full animate-spin"
                style={{ animationDuration: '25s', animationDirection: 'reverse' }}
              />

              <div className="relative size-64 md:size-80 lg:size-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://i.pravatar.cc/400?img=68"
                  alt="John Developer"
                  className="w-full h-full object-cover"
                  width={400} height={400}
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero01
